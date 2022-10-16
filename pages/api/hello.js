// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("started");
  for(let i = 0; i < 1000000; i++) {
    console.log(i);
  }
  console.log("ended");

  res.status(200).json({ name: 'John Doe' })
}
