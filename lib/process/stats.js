// https://nodejs.dev/nodejs-file-stats
// https://www.youtube.com/watch?v=Iizqcl4X7Fg
// promesa que llame al array que es otra funcion
// link.filter links rotos
// const filterBroken = link.filter(links => links.value === 'Fail');
//       res(`Broken: ${filterBroken.length}`);
// export const statLinksBroken = (arrObjLinks) => {
//     const validate = validateLinks(arrObjLinks);
//     return new Promise((res) => {
//       validate.then((link) => {
//         const filterBroken = link.filter(links => links.value === 'Fail');
//         res(`Broken: ${filterBroken.length}`);
//       });
//     });
//   };
// total links
// links.length;
// const total = links.length;
// const uniqueLinks = [...new Set(links.map(links => links.href))].length;
// res(`Total : ${total} \nUnique: ${uniqueLinks}`);
// export const linkStats = arrLinks => ([{
//     total: arrLinks.length,
//     unique: new Set(arrLinks.map(link => link.href)).size
//   }]);
//   export const validateBroken = arrLinks => arrLinks.filter(link => parseInt(link.status) === 404).length;
//   export const validateAndStats = arrLinks => ([{
//     total: linkStats(arrLinks)[0].total,
//     unique: linkStats(arrLinks)[0].unique,
//     broken: validateBroken(arrLinks)
//   }]);
// https://www.youtube.com/watch?v=Vpb4v4G4N-c&list=PLL1UEcDHVPjkGjqM4mvAb2z9meV7jWmbd&index=9
"use strict";