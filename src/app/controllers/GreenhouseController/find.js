import greenhouses from '../../../../mock/Greenhouses';

export default async (req, res) => {
  const greenhouse = greenhouses.find(grnh => grnh.id == req.params.id);

  return greenhouse
    ? res.json(greenhouse)
    : res.status(404).json({ error: 'Greenhouse not found!' });
};
