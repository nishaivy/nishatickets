//The out is a keyword in C# which is used for the passing the arguments to methods as a reference type. It is generally used when a method returns multiple values. The out parameter does not pass the property.
// C# program to illustrate the
// concept of out parameter
using System;

// class ref_out {
// 	static public void Main()
// 	{
// 		int n;
// 		// Pass variable n to the method using out keyword
// 		Sum(out n);
// 		Console.WriteLine("The sum of" +" the value is: {0}", n);
// 	}
//     //returns the value of the passed parameter
// 	public static void Sum(out int n)
// 	{
// 		n= 10;
// 		n += n;
// 	}
// }

//output: The sum of the value is: 20

//The ref is a keyword in C# which is used for the passing the arguments by a reference. Or we can say that if any changes made in this argument in the method will reflect in that variable when the control return to the calling method. The ref parameter does not pass the property.
class ref_type {
	public static void Main()
	{
		// Assign string value
		string str = "nisha";
		
		// ref parameter
		SetValue(ref str);
		Console.WriteLine(str);
	}
	static void SetValue(ref string str1)
	{
		// Check parameter value
		if (str1 == "nisha") {
			Console.WriteLine("Hello--nisha");
		}
		// Assign the new value 
		str1 = "Nisha Hiremani";
	}
}

//output:Hello--nisha
//Nisha Hiremani