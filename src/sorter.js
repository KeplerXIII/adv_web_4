function sortObject(objectList) {
  return objectList.sort((a, b) => b.health - a.health);
}

export default sortObject;
