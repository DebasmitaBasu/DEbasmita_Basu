function even(a) {
  var result = []
   
  for (i = 0; i != a.length; i++)
         if(a[i]!="," && parseInt(a[i]%2)==0)
         result[i]=a[i];
  return result;
}

console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9]));
