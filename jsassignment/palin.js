
 function chkpalindrome(temp)
   {
    var temp,rev=0
    var r=0
    var no=parseInt(temp)
     temp=no
    while(no>0)
      {
        r=parseInt(no%10)
        rev=(rev*10)+r
        no=parseInt(no/10)
      }  
     if(rev==temp)
       return true;
     else
      return false;
     

   }
console.log(chkpalindrome(121));


