var gql = require('gql');

module.exports = {
  extreme: function(){
    var query = gql.query();
    query.needs(1);
    query.exact('rs671', 'AA');
    return query;
  },
  moderate: function() {
    var query = gql.query();
    query.needs(1);
    query.exact('rs671', 'AG');
    return query;
  },
  none: function() {
    var query = gql.query();
    query.needs(1);
    query.exact('rs671', 'GG');
    return query;
  }
};
