import greenhouse from '../../../../mock/Greenhouses';

export default async (req, res) => {
    return res.json(greenhouse);
};
