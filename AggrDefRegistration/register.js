function register(aggrDefInput) {
  var aggrId = lookup[aggrDefInput.AggregateName];
  
  aggrDefInput.AggregateId = aggrId;
  aggrDefInput.CreationDate = '' + (new Date).getTime();
  
  return aggrDefInput;
}

var lookup = {
  'Daily Unique User Assessment Submission Count With Org Unit Security': 14,
  'Last Day of Course Access of Each User for Course': 5,
  'Current User Grades': 6,
  'Course Access Count By Day And Role With Org Level Security': 7,
  'Final Predicted Grade for Overall': 8,
  'Daily Count of Discussion Threads Started by Each User for Course': 15,
  'Daily Count of Discussion Posts Replied To by Each User for Course': 16,
  'Tool Access By Role and Tool': 1,
  'Tool Access By Course, Role, and Tool': 2,
  'Logins By Role': 3,
};

module.exports = register;
