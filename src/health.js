function checkHealth(userObject) {
  let healthBar = 'wounded';
  const { health } = userObject;
  if (health > 50) {
    healthBar = 'healthy';
  }
  if (health < 15) {
    healthBar = 'critical';
  }
  return healthBar;
}

export default checkHealth;
