import { Cloudinary } from "@cloudinary/url-gen/index";

const cld = new Cloudinary({
  cloud: {
    cloudName: "amouscloud",
  },
});

export default cld;
