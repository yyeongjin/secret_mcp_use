import { spawn } from "node:child_process";

export interface CommandResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

export async function runCommand(
  command: string,
  args: string[],
  options: {
    cwd: string;
    env?: NodeJS.ProcessEnv;
    input?: string;
    allowFailure?: boolean;
  },
): Promise<CommandResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: options.env ?? process.env,
      stdio: [options.input === undefined ? "ignore" : "pipe", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout!.setEncoding("utf8");
    child.stderr!.setEncoding("utf8");
    child.stdout!.on("data", (chunk: string) => {
      stdout += chunk;
    });
    child.stderr!.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (exitCode) => {
      const result = { stdout, stderr, exitCode: exitCode ?? 1 };
      if (result.exitCode !== 0 && !options.allowFailure) {
        reject(
          new Error(
            `${command} ${args.join(" ")} failed with ${result.exitCode}: ${(stderr || stdout).slice(0, 4000)}`,
          ),
        );
        return;
      }
      resolve(result);
    });
    if (options.input !== undefined) child.stdin!.end(options.input);
  });
}
