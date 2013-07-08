function fib(n){

	var a; 
	var b;
	var c;
	
	if (n == 0)
	{
		return n;
	}
	else
	{
	        a = 1;
		b = 1;
                console.log(a);
                console.log(b);
		for (i = 3; i<=n; i++)
	    {
		  c= a + b;
                  console.log(c);
		  a=b;
		  b=c;
    }
	   return current;
   }
}


fib(10);
