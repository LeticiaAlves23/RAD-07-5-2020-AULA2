var router = express.Router();
 
router.get('/Usuario', function(req, res, next) {
  if(req.query.fail)
    res.render('Usuario', { message: 'Token Invalido' });
    if(req.query)
    res.render('Usuario', { message: 'Bem vindo' });
  else
    res.render('Usuario', { message: null });
})
 
module.exports = router;