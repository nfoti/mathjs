var assert = require('assert'),
    approx = require('../../../tools/approx'),
    error = require('../../../lib/error/index'),
    math = require('../../../index'),
    bigUtil = require('../../../lib/util/index').bignumber,
    bignumber = math.bignumber,
    gammalnd = math.gammalnd;

describe('gammalnd', function () {

    it('should calculate the gammaln of a whole number', function () {
      approx.equal(gammalnd(1., 0.), 0.);
      approx.equal(gammalnd(1., 1.), 0.);
      approx.equal(gammalnd(1., 2.), 1.1447298858493999);

      approx.equal(gammalnd(2., 0.), 0.);
      approx.equal(gammalnd(2., 1), 0.);
      approx.equal(gammalnd(2., 3), 1.5963125911388552);

      //approx.equal(gammalnd(3), 0.69314718055994529);
      //approx.equal(gammalnd(4.), 1.791759469228055000812477);
      //approx.equal(gammalnd(8.), 8.525161361065414300165531);
      //approx.equal(gammalnd(64.), 201.00931639928152667928);
      //approx.equal(gammalnd(256.), 1161.71210111840065079);
    });

    it('should calculate the gammaln of a rational number', function () {
      approx.equal(gammalnd(0.1, 0), 0.0);
      approx.equal(gammalnd(0.1, 1), 2.252712651734206);
      //approx.equal(gammalnd(0.5), 0.57236494292469997);
      //approx.equal(gammalnd(0.6), 0.39823385806923489961685);
      //approx.equal(gammalnd(0.7), 0.26086724653166651438573);
      //approx.equal(gammalnd(3.4), 1.0923280598027415674947);
    });

    it('should calculate the gammaln of a irrational number', function () {
      approx.equal(gammalnd(Math.PI, 0), 0.);
      approx.equal(gammalnd(Math.PI, 1), 0.82769459232343701);
      approx.equal(gammalnd(Math.PI, 3), 2.9999862338789374);
      //approx.equal(gammalnd(Math.E), 0.449461741820069);
    });

    //it('should calculate the gamma of each element in a matrix', function () {
    //  //approx.deepEqual(gammalnd(math.matrix([1,2,3,4,5])),
    //  //                 math.matrix([0.,-2.220446049250313e-16,0.693147180559944,1.791759469228054,3.178053830347945]));
    //});

    //it('should calculate the gamma of each element in an array', function () {
    //  //approx.deepEqual(gammalnd([1,2,3,4,5]),
    //  //                 [0.,-2.220446049250313e-16,0.693147180559944,1.791759469228054,3.178053830347945]);
    //});

    it('should throw en error if called with invalid number of arguments', function() {
      assert.throws(function() { gammalnd(); });
      assert.throws(function() { gammaln(1); });
      assert.throws(function() { gammaln(1,2,3); });
    });

    it('should throw en error if called with invalid type of argument', function() {
      assert.throws(function() { gammad(new Date(), 2.); });
      assert.throws(function() { gammad(5., 'a string'); });
    });

});
