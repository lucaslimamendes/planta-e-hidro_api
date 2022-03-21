export default async (req, res) => {
  const { userId, width, length, address, tubes } = req.body;

  if (!userId) return res.status(400).json({ error: 'Missing user Id!' });

  const greenhouse = {
    id: Math.floor(Math.random() * 500) + 1,
    width,
    length,
    address,
    userId,
    tubes,
  };
  return res.status(201).json(greenhouse);
};
