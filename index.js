function distanceFromHqInBlocks(pickupLocation) {
      //it('returns a distance in blocks', function() {
        //expect(distanceFromHqInBlocks(43)).to.equal(1);
      //it('returns a distance in blocks', function() {
        //expect(distanceFromHqInBlocks(50)).to.equal(8);
      //it('calculates distances below 42nd street', function() {
        //expect(distanceFromHqInBlocks(34)).to.equal(8);
      // if (pickupLocation > 42) {
      //   return pickupLocation - 42
      // } else if (pickupLocation < 42) {
      //   return 42 - pickupLocation
      // }
      return Math.abs(pickupLocation - 42)
    }
    
function distanceFromHqInFeet(pickupLocation) {
      //it('returns a distance in feet', function() {
        //expect(distanceFromHqInFeet(43)).to.equal(264);
      //it('returns a distance in feet', function() {
        //expect(distanceFromHqInFeet(50)).to.equal(2112);
      //it('calculates distances below 42nd street', function() {
        //expect(distanceFromHqInFeet(34)).to.equal(2112);
      return distanceFromHqInBlocks(pickupLocation) * 264
    }

function distanceTravelledInFeet(start, destination) {
      //it('returns the distance travelled in feet', function() {
        //expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
      //it('returns a distance in feet', function() {
        //expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
      //it('returns distance when destination is below distance', function() {
        //expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
      return Math.abs(start - destination) * 264
    }
  
function calculatesFarePrice(start, destination) {
      //it('gives customers a free sample', function() {
        //expect(calculatesFarePrice(43, 44)).to.equal(0);
      //it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
        // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
        //expect(calculatesFarePrice(34, 32)).to.equal(2.56);
      //it('charges 25 dollars for a distance over 2000 feet', function() {
        //expect(calculatesFarePrice(50, 58)).to.equal(25);
      //it('does not allow rides over 2500 feet', function() {
        //expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
      let feet = Math.abs(start - destination) * 264;
      if (feet <= 400) {
        return 0;
      } else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * .02;
      } else if (feet > 2000 && feet <=2500) {
        return 25;
      } else if (feet > 2500) {
        return 'cannot travel that far';
      }
    }