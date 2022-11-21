const express = require('express');
const router = express.Router()

const { createUser, loginUser,  
        updateUser, findUser,
        users, deleteUser} = require('../../App/controller/controller');



router.get('/', (req, res) => {
    res.send('Its Works!');
});
router.get('/login', loginUser);
router.get('/info/:id', findUser);
router.get('/info', users);
router.post('/reg', createUser);
router.put('/userupd/:id', updateUser);
router.delete('/userdel/:id', deleteUser);


module.exports = router;