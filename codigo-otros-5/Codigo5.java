package revisioncodigo5;

import java.util.Scanner;  // Importamos a la clase Scanner.

public class Codigo5 {

	public static void main(String[] args) { // Se añadió el método main.
		Scanner s = new Scanner(System.in);  // Agregamos System.in como argumento para Scanner.
		System.out.print("Introduzca un número: ");
		int ni = s.nextInt(); // Se cambió el tipo de dato por un entero para utilziarlo en el bucle While
    
		while (ni > 0) {
			int digito = (int)(ni % 10);
			if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				System.out.println("El " + digito + " es un número afortunado.");
				ni /= 10;
			} else {
				System.out.println("El " + digito + " no es un número afortunado.");
				ni /= 10;
			} // Siguiendo el camino de verificar los diferentes digitos de un número entero para determinar si estos son números afortunados o no, se elimino el if y las variables afo y nafo.
		}
		s.close();
	}
}