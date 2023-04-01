import Replicate from "replicate";
export default async function handler(req, res) {
  const imageUrl = req.body.imageUrl;

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const output = await replicate.run(
    "tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3",
    {
      input: {
        img: imageUrl,
      },
    }
  );

  res.status(200).json(output);
}
