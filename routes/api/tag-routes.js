const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// The `/api/tags` endpoint


  // find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }]
    })

    res.status(200).json(tagsData)
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })

    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create(req.body)

    res.status(200).json(newTagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const newTagData = await Tag.update({ tag_name: req.body.tag_name}, {
      where: {
        id: req.params.id
      }
    })

    res.status(200).json(newTagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })

    res.status(200).json(deleteTagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
