// use of includes('');


const generes = ['jazz', 
                 'metal-core',
                 'punk',
                 'ska-core',
                 'vaporwave',
                 'country-core'];

const endWithCore = generes.filter((gener) => {
  return gener.includes('-core');
});

console.log(endWithCore);

// [ 'metal-core', 'ska-core', 'country-core' ]

