package classActivities;

public class SimpleCircle 
{
	double radius, area, perimeter;

	// no arg constructor
	public SimpleCircle() 
	{
		this.radius = 1;
		this.area = this.computeArea();
		this.perimeter = this.computePerimeter();
	}

	public SimpleCircle(double radius) 
	{
		this.radius = radius;
		this.area = this.computeArea();
		this.perimeter = this.computePerimeter();
	}

	public double computePerimeter() 
	{
		return 2 * Math.PI * this.radius;
	}

	public double computeArea() 
	{
		return Math.PI * this.radius * this.radius;
	}

	public void displayCircle() 
	{
		System.out.println("Radius: " + this.radius);
		System.out.println("Area: " + this.area);
		System.out.println("Perimeter: " + this.perimeter);
		System.out.println();

	}

	public boolean compare(SimpleCircle c1) 
	{
		if (this.radius == c1.radius)
			return true;
		else
			return false;
	}

	public SimpleCircle copy() 
	{
		SimpleCircle temp = new SimpleCircle(this.radius);
		return temp;

	}
}
