using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace first_try{
  class Program{
    
    static void Main(string[] args){

      string a = Convert.ToInt32(Console.ReadLine());
      string b = Convert.ToInt32(Console.ReadLine());
      string operation = Console.ReadLine();
      int result;
      if(operation == "sum"){
        result = Sum(a, b);
      }
      else if(operation == "sub"){
        result = Sub(a, b);
      }
      else if(operation == "mul"){
        result = Mul(a, b);
      }
      else if (operation == "div")
      {
            
      }
      else{
        Console.WriteLine("ERROR: Wrong input for operation (sum, sub, mul, div)");
      }
    }


    static void Triangle(){
        
      string strNumber = Console.ReadLine();    
        
      /*double a = 10.8;
      int b = (int)a;*/

      int number = Convert.ToInt32(strNumber);
      int result = Sum(number); 
      Console.WriteLine("result: " + result);
    
      for(int i = 0; i<number; i++){
        string currentLine = string.Concat(Enumerable.Repeat(" ", number-i));
        currentLine += string.Concat("/");
        currentLine += string.Concat(Enumerable.Repeat(" ", i));
        currentLine += string.Concat("|");
        Console.WriteLine(currentLine);
        if(i == number -1){
          string endline = " ";
          endline += string.Concat(Enumerable.Repeat("-", number));
          Console.WriteLine(endline);
        }
      }

    }

    static int Sum(int a, int b){
      return a+b;
    }

    static int Sub(int a, int b){
      return a-b;
    }
    static int Mul(int a, int b){
      return a*b;
    }
    static int Div(int a, int b){
      return a/b;
    }
  }
}
