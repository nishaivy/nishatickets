//Overriding is a technique that allows the invoking of functions from another class (base class) in the derived class. Creating a method in the derived class with the same signature as a method in the base class is called as method overriding. 
using System;

// base class
public class web {
	string name = "Csharp Overridding";
	public virtual void showdata()
	{
		Console.WriteLine("Website Name: " + name);
	}
}
class stream : web {
	
	
	string s = "ECE";
	
	//overridding showdata in dervied class
	public override void showdata()
	{
		// Calling 'showdata()' of base
		base.showdata();
		Console.WriteLine("About: " + s);
	}
}

class Program {
	static void Main()
	{
		stream E = new stream();
		// it first invokes showdata() of class web then it invokes showdata() of class stream
		E.showdata();
	}
}
