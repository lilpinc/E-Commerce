const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, attributes: ['product_name'] }]
    });
    res.status(200).json(tagDataData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, attributes: ['product_name'] }]
    });
    if (!tagDataData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(tagDataData);
  } catch (error) {
    res.status(500).json(error);
  }
}); 
router.post('/', async (req, res) => {
  // create a new tag
  try {
  const tagData = await Tag.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update ({
    tag_name: req.body.tag_name
  },
  {
  where: {
    tag_id: req.params.tag_id,
  }
  })
  .then((updatedTag) => {
    res.json(updatedTag);
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      tag_id: req.params.tag_id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
