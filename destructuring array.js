
const backupPath = 'apartments/Lexington_MA/with_inunitlaundry/cat-friendly';

const updateQuery = (backUpPath) => {
  let queryObj = {};
  let arr = backUpPath.split('/');
  const [apt, searchSlug, ...queryRemaining] = arr;

  queryObj['searchSlug'] = searchSlug;
  queryObj['0'] = `/${queryRemaining.join('/')}`;

  return queryObj;
}
console.log(updateQuery(backupPath));