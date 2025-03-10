function bisextile(année) {
   

    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
      return true;
    }
    return false;
  }
  
  console.log(bisextile(365)); 
  