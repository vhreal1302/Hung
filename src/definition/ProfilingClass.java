package definition;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

public class ProfilingClass {
	private final static String[] keywords = {"Given", "When", "Then", "But", "And"};
	//Element of hashtable has the form: <method's name>: called <n> times, para: ... 
	private static TreeMap<String, ArrayList<String>> allMethods = new TreeMap<String, ArrayList<String>>();
	
	public static void main(String[] args) {
		try {
			ProfilingClass.myProfilingClass();
		}
		catch(IOException e) {
			e.printStackTrace();
		}
		
	}
	
	private static int myStartWith(String afterTrim, String[] keywords) {
		for (int i = 0; i <= keywords.length - 1; i++) {
			if (afterTrim.startsWith(keywords[i])) {
				//Return the position of the keyword afterTrim starts with
				return i;
			}
		}
		//Returning -1 means afterTrim does not start with any keyword in array keywords
		return -1;
	}
	
	public static void myProfilingClass() throws IOException {
		//List all file in folder features
		String folderPath = ".\\features";
		File folder = new File(folderPath);
		File[] listOfFiles = folder.listFiles();
		String fileName = "";
		for (File aFile: listOfFiles) {
			if(aFile.isFile()) {
				fileName = aFile.getName();
				//For each file, open it
				String filePath = ".\\features\\" + fileName;
				FileReader fr = new FileReader(filePath);
				BufferedReader br = new BufferedReader(fr);
				/*
				String temp;
				while ((temp = br.readLine()) != null) {
					System.out.println(temp);
				}
				
				br.close();
				*/
				String aLine = "";
				String afterTrim = "";
				StringBuilder totalStr;
				StringBuilder para;
				String afterRemovingKeyword;
				String[] afterSplitting;
				String totalString, paraString;
				int i;
				
				while ((aLine = br.readLine()) != null) {
					totalStr = new StringBuilder();
					para = new StringBuilder();
					//Trim each line
					afterTrim = aLine.trim();
					
					//If start with Jerkin keywords, start processing
					i = myStartWith(afterTrim, keywords);
					if ( i >= 0) {
						//Remove keyword + 1 space, e.g remove "Given "
						afterRemovingKeyword = afterTrim.substring(keywords[i].length() + 1);
						
						//Split string with "
						afterSplitting = afterRemovingKeyword.split("\"");
						
						for (int j = 0; j <= afterSplitting.length - 1; j++) {
							//Trim each element of created string array
							afterSplitting[j] = afterSplitting[j].trim();
							//Replace space with _ only for even index
							if (j % 2 == 0) {
								afterSplitting[j] = afterSplitting[j].replace(" ", "_");
							}
							//Concate even-indexed elements: totalStr =  array[0] + "_" + array[2] + ... + ": "
							if (j == 0) {
								totalStr.append(afterSplitting[j]);
							}
							else if ((j >= 2) && (j % 2 ==0)) {
								totalStr.append("_");
								totalStr.append(afterSplitting[j]);
							}
							//Add odd-indexed elements to totalStr, these are parameters that the function receive
							if (j == 1) {
								para.append(afterSplitting[j]);
							}
							else if ((j >= 3) && (j % 2 == 1)) {
								para.append(", ");
								para.append(afterSplitting[j]);
							}
						}
						//Convert stringbuilder to string
						totalString = totalStr.toString();
						paraString = para.toString();
						
						if(allMethods.containsKey(totalString)) {
							allMethods.get(totalString).add(paraString);
						}
						else {
							allMethods.put(totalString, new ArrayList<String>());
							allMethods.get(totalString).add(paraString);
						}
					} //end if
				} //end while
				//Stop reading a file
				br.close();
			}//end of if aFile.isFile()
		}
		//Treemap already sorted

		//Print the treemap
		Set set = allMethods.entrySet();
		Iterator iter = set.iterator();
		ArrayList<String> paraArr;
		//Create a file to write the result to
		String resultFilePath = ".\\profiling\\profiling.txt"; 
		File file = new File(resultFilePath);
		file.createNewFile();
		FileWriter fw = new FileWriter(resultFilePath);
		BufferedWriter bw = new BufferedWriter(fw);
		while (iter.hasNext()) {
			Map.Entry<String, ArrayList<String>> me = (Map.Entry<String, ArrayList<String>>) iter.next();
			paraArr = allMethods.get(me.getKey());
			//Write to a file
			bw.write(me.getKey() + "(" + paraArr.size() + ")");
			bw.newLine();
			System.out.println();
			for (String aPara : paraArr) {
				bw.write("    " + aPara);
				bw.newLine();
			}
		}
		//Stop writing
		bw.close();
				
	}//end of method
}
