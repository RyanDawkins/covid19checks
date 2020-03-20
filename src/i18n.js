import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
        en: {
          translation: {
            'income': 'Income',
            'maritalStatus': 'Married?',
            'yes': 'Yes',
            'no': 'No',
            'expectedPayout': 'Expected payout',
            'languageMessage': '¿hable español?',
            'disclaimer': 'This calculation does no guarantee a payout. This is exclusively a projection based on the <1>NPR article of the bill propsed on 3/19/2020.</1>'
          }
        },
        es: {
          translation: {
              'income': 'Sueldo',
              'maritalStatus': '¿Estas casado?',
              'yes': 'Sí',
              'no': 'No',
              'expectedPayout': 'Pago esperado',
              'languageMessage': 'Speak English?',
              'disclaimer': 'Este cálculo no garantiza un pago. Esta es exclusivamente una proyección basada en <1>el artículo de NPR del proyecto de ley aprobado el 19/03/2020</1>',
          }
        }
      },
  });


export default i18n;