package revisioncodigo5;

import java.util.Scanner;

public class Codigo6 {
	  
	public static void main(String[] args) {
	    int[] n = new int[20]; // Se agrego la palabra reservada new para crear el arreglo
	    Scanner leer = new Scanner(System.in); // se creo un objeto de tipo Scanner. 
	
	    for (int i = 0; i < n.length ; i++) { // Se agregó n.length para verificar que el iterador recorra todo el arreglo y se areglo el operador de incremento al iterador
	      n[i] = (int)(Math.random() * 381) + 20;
	      System.out.print(n[i] + " ");
	    }
	    
	    System.out.print("\n¿Qué números quiere resaltar?");
	    System.out.print("\n1 – los múltiplos de 5 \n 2 – los múltiplos de 7: "); // Se modifico el mensaje al usuario para visualizar mejor el menú de opciones.
	    int opcion = leer.nextInt();
	
	    int multiplo = (opcion == 1) ? 5 : 7;
	    for(int e : n){
		      if (e % multiplo == 0) {
			        System.out.println(e + " Es múltiplo de: " + multiplo ); // Se moficiaron las salidas de los mensajes.
			      } else{
			        System.out.println(e + " No es múltiplo de: " + multiplo);
			      }
	    }
	    leer.close(); // Se cierra el Scanner
	}
}
  