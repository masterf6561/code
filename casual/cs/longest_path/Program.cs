// See https://aka.ms/new-console-template for more information
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace longest_path
{
  class Program
  {
    private static int matrixSize = 5;
    private static int[,] matrix = new int[matrixSize, matrixSize];
    private static int[,] lipArray = new int[matrixSize, matrixSize];

    static void Main(string[] args)
    {
      Console.WriteLine("Please Enter the Matrix Size (max 10): ");
      //matrixSize = Convert.ToInt32(Console.ReadLine());
      int[,] array = new int[matrixSize, matrixSize];
      matrix = generateMatrix(array);
      
      Console.WriteLine(longestIncreasingPath());
    }

    static int[,] generateMatrix(int[,] matrix)
    {  
      int currentValue;
      Random random = new Random();
      for(int row = 0; row<matrixSize; row++)
         {
           for(int col = 0; col<matrixSize; col++)
           {
             currentValue = random.Next(1, 101);
             matrix[row, col] = currentValue;
             Console.Write(currentValue + " ");
           
         }
           Console.WriteLine("");
      }
      Console.WriteLine("{0} | {1}", matrix.GetLength(0), matrix.GetLength(1));
      return matrix;
    }

    static int longestIncreasingPath()
    { 
      int currentLip;
      int lipMax = 1;
      for(int row = 0; row<matrixSize; row++)
      {
        for(int col = 0; col<matrixSize; col++)
        {
          currentLip = depthFirstSearch(row, col, -1); //-1 so that it defaults to not comparing, because we never want the result of the first comparison
          if(currentLip > lipMax)
          {
            lipMax = currentLip;
          }
        }
      }
      
      return lipMax;
    }

    static int depthFirstSearch(int row, int col, int prevValue)
    {
      int length = 1;
      if(row < 0 || row == matrixSize || col < 0 || col == matrixSize || matrix[row, col] <= prevValue )
      {
        return 0;
      }
      if(lipArray[row, col] > 0)
      {
        return lipArray[row, col];
      }
      
      length = Math.Max(length, 1 + depthFirstSearch(row + 1, col, matrix[row, col]));
      length = Math.Max(length, 1 + depthFirstSearch(row - 1, col, matrix[row, col]));
      length = Math.Max(length, 1 + depthFirstSearch(row, col + 1, matrix[row, col]));
      length = Math.Max(length, 1 + depthFirstSearch(row, col - 1, matrix[row, col]));
      
      lipArray[row, col] = length;

      return length;
    }
  }
}

