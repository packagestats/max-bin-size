const Registry = require('npm-registry');
const values = require('object-values');

// Around the length limits of an http get request
const maxGetRequestLength = 2048;

function maxMirrorLength() {
  const mirrorLengths = values(Registry.mirrors).map(function(mirror) {
    return mirror.length;
  });

  return Math.max.apply(Math, mirrorLengths);
}

export default function() {
  return maxGetRequestLength - (maxMirrorLength() + '/downloads/range/last-month/'.length);
}
