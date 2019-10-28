module.exports = function(app) {
  var drone = require('../controllers/DroneController');

  // project Routes
  app.route('/drones')
    .get(drone.list_all_drones)
    .post(drone.create_a_drone);

  app.route('/drones/:droneId')
    .get(drone.read_a_drone)
    .put(drone.update_a_drone)
    .delete(drone.delete_a_drone);
};
