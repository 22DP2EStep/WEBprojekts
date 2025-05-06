<template>
    <div class="terms-container">
      <h1>Noteikumi un nosacījumi</h1>
      <div v-for="(section, index) in terms" :key="index" class="term-section">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TermsPage',
    data() {
      return {
        terms: [
          {
            title: 'Ievads',
            content: 'Šie noteikumi un nosacījumi nosaka mūsu tīmekļa vietnes lietošanas noteikumus un regulējumus.'
          },
          {
            title: 'Tīmekļa vietnes lietošanas licence',
            content: 'Izmantojot šo tīmekļa vietni, jūs piekrītat ievērot šos noteikumus un nosacījumus.'
          },
          {
            title: 'Privātuma politika',
            content: 'Mēs novērtējam jūsu privātumu un esam apņēmušies aizsargāt jūsu personisko informāciju.'
          },
          {
            title: 'Atbildības ierobežojums',
            content: 'Mēs nenesam atbildību par jebkādām zaudējumiem vai kaitējumu, kas var rasties, izmantojot mūsu pakalpojumus.'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .terms-container {
    padding: 20px;
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .term-section {
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 1.8em;
    color: var(--text-color);
  }
  
  p {
    font-size: 1.1em;
    line-height: 1.6;
    color: var(--text-color);
  }
  </style>