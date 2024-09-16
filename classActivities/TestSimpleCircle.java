package classActivities;

public class TestSimpleCircle 
{
	public static void main(String[] args) 
	{
		SimpleCircle[] c = new SimpleCircle[3];
		c[0] = new SimpleCircle(5);
		c[1] = new SimpleCircle(15);
		c[2] = new SimpleCircle(5);
		displaySimpleCircle(c);
		
		SimpleCircle[] newCircle = removeDuplicates(c);
		System.out.println("Removed doubles");
		System.out.println();
		displaySimpleCircle(newCircle);
	}

	public static SimpleCircle[] removeDuplicates(SimpleCircle[] c)
	{
		int count = 0;
/*		for(int i=0; i < c.length; i++)
		{
			boolean Duplicate = false;
			for(int k = 0; k < count; k++)
			{
				if(c[i].compare(c[k]))
				{
					Duplicate = true;
					break;
				}
			}
			
			if(!Duplicate)
			{
				count++;
			}
		} */
		
		SimpleCircle[] newCircle = new SimpleCircle[c.length];
		int index = 0;
		for (int i = 0; i < c.length; i++)
		{
			boolean Duplicate = false;
			for (int j=0; j < index; j++)
			{
				if (c[i].compare(newCircle[j]))
				{
					Duplicate = true;
					break;
				}
			}
			
			if(!Duplicate) 
			{
				newCircle[index] = c[i].copy();
				index++;
			}
		}
		
		return newCircle;
		
	}
		
	public static void displaySimpleCircle(SimpleCircle[] temp) 
	{
		for (int i = 0; i < temp.length; i++)
			temp[i].displayCircle();
	}
}
