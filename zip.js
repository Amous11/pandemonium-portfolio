import fs from "fs";
import archiver from "archiver";

const output = fs.createWriteStream("dist/dist.zip");
const archive = archiver("zip", {
  zlib: { level: 9 }, // Sets the compression level
});

output.on("close", () => {
  console.log(`${archive.pointer()} total bytes`);
  console.log(
    "archiver has been finalized and the output file descriptor has closed."
  );
});

archive.on("warning", (err) => {
  if (err.code !== "ENOENT") {
    throw err;
  }
});

archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);

archive.directory("dist/", false);

archive.finalize();
