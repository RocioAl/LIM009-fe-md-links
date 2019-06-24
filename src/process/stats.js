const dw=require('../process/extractLinksOfMarkdowns');
let arrayLinks=dw.linksmd('C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md');


const StastLink = arrLinks => ([{
    total: arrLinks.length,
    unique: new Set(arrLinks.map(link => link.href)).size
  }]);
console.log(StastLink(arrayLinks));

 const BrokenLinks = arrLinks => arrLinks.filter(link => parseInt(link.status) === 404).length;
 console.log(BrokenLinks(arrayLinks));


  
























// https://www.youtube.com/watch?v=Vpb4v4G4N-c&list=PLL1UEcDHVPjkGjqM4mvAb2z9meV7jWmbd&index=9