import greenhouses from '../../../../mock/Greenhouses';

export default async (req, res) => {
    const greenhouseIdx = greenhouses.findIndex((grnh) => grnh.id == req.params.id);
    if(!greenhouseIdx ||greenhouseIdx < 0)
        return res.status(404).json({ error: 'Greenhouse not found!' });

        greenhouses.splice(greenhouseIdx, 1);
    return res.json(greenhouses);
};