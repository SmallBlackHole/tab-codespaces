const child_process = require("child_process");
const utils = require("@microsoft/teamsfx-run-utils");

async function run() {
    const args = process.argv.slice(2);

    if (args.length !== 2) {
        console.log(`Usage: node ${__filename} [project path] [env path].`);
        process.exit(1);
    }

    const envs = await utils.loadEnv(args[0], args[1]);
    const teamsAppId = envs.TEAMS_APP_ID;
    const url = `https://teams.microsoft.com/l/app/${teamsAppId}?installAppPackage=true&webjoin=true`;
    child_process.execFile("npx", ["open-cli", url], { shell: false });
}

run();