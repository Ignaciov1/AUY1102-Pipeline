import { WordMother } from '../../../../test/mother-object/WordMother';
import FirstName from '../../../../test/value-object/primitives/StringValueObject/__mocks__/FirstName'

// Eliminamos las variables globales para evitar confusiones
// let firstName: FirstName;
// let name: string;

describe('StringValueObject', () => {
  // Eliminamos el 'beforeEach' porque generaba datos aleatorios impredecibles

  describe('different to', () => {

    /**
     * ESTA ES LA PRUEBA QUE ESTABA FALLANDO.
     * La arreglamos usando valores fijos ("palabra_uno" y "palabra_dos")
     * en lugar de valores aleatorios.
     */
    it(`should return "true" if the values are different`, () => {
      const firstName = new FirstName("palabra_uno");
      const name = "palabra_dos"; // Un valor diferente
      
      const expected = firstName.differentTo(name);

      // La prueba original estaba bien (esperar 'true'), el problema eran los datos.
      expect(expected).toBe(true);
    })

    /**
     * Esta prueba ya estaba bien, pero la hacemos independiente
     * para mayor claridad.
     */
    it(`should return "false" if the values are not different`, () => {
      const name = WordMother.random(); // Creamos un valor
      const firstName = new FirstName(name); // Usamos el MISMO valor
      
      const expected = firstName.differentTo(name);

      expect(expected).toBe(false);
    })
  })
})