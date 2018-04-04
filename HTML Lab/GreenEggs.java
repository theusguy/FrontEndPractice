import java.util.*;
class GreenEggs {
	public static void main(String[] args) throws FileNotFoundException {
		Scanner scan = new Scanner(GreenEggs.txt);
		int test = 0;
		while (scan.hasNext()) {
			test++;
		}
		String[] compilation = new String[test];
		System.out.println("Number of words: " + test);
		for (int i=0; i<compilation.length; i++) {
			int sameWords = 0;
			for (int j=0; j<complitation.length; j++) {
				compliation[i].equalsIgnoreCase(compilation[j]);
				sameWords++;
				System.out.println("Amount of times the word \"" + compilation[i] + "\" is used.");
			}
		}
		
	}
}