class Print {
  success(message) {
    console.log("\x1b[32m[✔ Success] \x1b[0m " + message);
  }
  success_file(file, message) {
    console.log(
      "\x1b[32m[✔ Success] \x1b[0m " + `\x1b[34m${file} \x1b[0m` + message
    );
  }

  info(message) {
    console.log("\x1b[34m[• Info]\x1b[0m " + message);
  }
  warn(message) {
    console.log("\x1b[33m[! Warning]\x1b[0m " + message);
  }
  error(message) {
    console.log("\x1b[31m[✘ Error] \x1b[0m " + message);
  }

  log(message) {
    console.log(message);
  }
  file(message, filename) {
    console.log(`[FILE] ${filename}`);
    console.log(message);
  }
}

module.exports = new Print();
