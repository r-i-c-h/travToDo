const express = require('express');
const router = express.Router();

const Item = require('../../models/item-schema');

router.get('/', (req,res) => {
  Item.find()
      .sort({ date: -1})
      .then( items => res.json(items))
      .catch(err => console.error(`Problem GETTINGing ${req.body}: ${err}`));
});

router.post('/', (req,res) => {
  const newItem = new Item({
    name: req.body.name
  });
   newItem.save()
      .then( item => res.json(item) )
      .catch(err => console.error(`Problem POSTing ${req.body.name}: ${err}`));
});

router
  .delete('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then( item => item.remove().then( () => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

// export default router;
module.exports = router;