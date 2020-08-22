let topProfessors = [
  {
    _id: 'Zhang, Wei',
    count: 82,
  },
  {
    _id: 'Yuen, Kwok-Yung',
    count: 79,
  },
  {
    _id: 'Wang, Wei',
    count: 72,
  },
  {
    _id: 'Li, Yan',
    count: 70,
  },
  {
    _id: 'Torres, Antoni',
    count: 61,
  },
  {
    _id: 'Liu, Wei',
    count: 59,
  },
  {
    _id: 'Liu, Jun',
    count: 53,
  },
  {
    _id: 'Cao, Bin',
    count: 53,
  },
  {
    _id: 'Li, Wei',
    count: 53,
  },
  {
    _id: 'Li, Hui',
    count: 53,
  },
];

let topProfessorsWithArticles = [];

for ({ _id: name, count: count } of topProfessors) {
  let professor = {
    name: name,
    coung: count,
    articles: [],
  };

  //..

  let articlesByProfessor = [
    {
      title:
        'Laboratory Diagnosis of Four Recent Sporadic Cases of Community-acquired SARS, Guangdong Province, China',
    },
    {
      title:
        'Comparison of Patients Hospitalized With Influenza A Subtypes H7N9, H5N1, and 2009 Pandemic H1N1',
    },
    {
      title:
        'The neck-region polymorphism of DC-SIGNR in peri-centenarian from Han Chinese Population',
    },
    {
      title:
        'Spatial statistical analysis of Coronavirus Disease 2019 (Covid-19) in China.',
    },
    {
      title:
        'Spatial statistical analysis of Coronavirus Disease 2019 (Covid-19) in China',
    },
    {
      title:
        'A Comparison Between Chinese Children Infected with COVID-19 and with SARS',
    },
    {
      title:
        'The Serum Profile of Hypercytokinemia Factors Identified in H7N9-Infected Patients can Predict Fatal Outcomes',
    },
    {
      title:
        "Preventive strategy for the clinical treatment of hip fractures in the elderly during the COVID-19 outbreak: Wuhan's experience",
    },
    {
      title:
        'Houttuynia cordata inhibits lipopolysaccharide-induced rapid pulmonary fibrosis by up-regulating IFN-γ and inhibiting the TGF-β1/Smad pathway',
    },
    {
      title:
        'Use of angiotensin-converting enzyme inhibitors and angiotensin II receptor blockers in context of COVID-19 outbreak: a retrospective analysis',
    },
    {
      title:
        'A Trial of Lopinavir–Ritonavir in Adults Hospitalized with Severe Covid-19',
    },
    {
      title:
        'Immune-related factors associated with pneumonia in 127 children with coronavirus disease 2019 in Wuhan',
    },
    {
      title:
        'Clinical course and risk factors for mortality of adult inpatients with COVID-19 in Wuhan, China: a retrospective cohort study',
    },
    {
      title:
        'Spinal anaesthesia for patients with coronavirus disease 2019 and possible transmission rates in anaesthetists: retrospective, single-centre, observational cohort study',
    },
    {
      title:
        'Preventive strategy for the clinical treatment of hip fractures in the elderly during the COVID-19 outbreak: Wuhan’s experience',
    },
    {
      title:
        'SARS-CoV-2 infection in infants under 1 year of age in Wuhan City, China',
    },
    {
      title:
        'Antibody Detection and Dynamic Characteristics in Patients with COVID-19',
    },
    {
      title:
        'ACP risk grade: a simple mortality index for patients with confirmed or suspected severe acute respiratory syndrome coronavirus 2 disease (COVID-19) during the early stage of outbreak in Wuhan, China',
    },
    {
      title:
        'Comparison of severity scores for COVID-19 patients with pneumonia: a retrospective study',
    },
    {
      title:
        'Sex differences in clinical findings among patients with coronavirus disease 2019 (COVID-19) and severe condition',
    },
    {
      title:
        'Clinical features of severe pediatric patients with coronavirus disease 2019 in Wuhan: a single center’s observational study',
    },
    {
      title:
        'Comparison of severity scores for COVID-19 patients with pneumonia: a retrospective study',
    },
    {
      title:
        'Immune‐related Factors Associated with Pneumonia in 127 Children with Coronavirus Disease 2019 in Wuhan',
    },
    {
      title:
        'Identification of a novel coronavirus causing severe pneumonia in human: a descriptive study',
    },
    {
      title:
        'Analysis of the positive rate of 4254 cases of COVID‐19 nucleic acid tests in different aites in Wuhan, China',
    },
    {
      title:
        'Sustained Viremia and High Viral Load in Respiratory Tract Secretions Are Predictors for Death in Immunocompetent Adults with Adenovirus Pneumonia',
    },
    {
      title:
        'A single-center, retrospective study of COVID-19 features in children: a descriptive investigation',
    },
    {
      title:
        'Mechanism of higher risk for COVID-19 in diabetes: a mask to lift',
    },
    {
      title:
        'The profile of peripheral blood lymphocyte subsets and serum cytokines in children with 2019 novel coronavirus pneumonia',
    },
    {
      title:
        'Identification of a novel coronavirus causing severe pneumonia in human: a descriptive study',
    },
    {
      title:
        'The profile of peripheral blood lymphocyte subsets and serum cytokines in children with 2019 novel coronavirus pneumonia',
    },
    {
      title:
        'The Role of Dental Professionals in Pandemic Events and Disaster Responses',
    },
    {
      title:
        'Corticosteroid treatment in severe COVID-19 pneumonia: two cases and literature review',
    },
    {
      title:
        'Multiplex Tests for Respiratory Tract Infections: The Direct Utility of the FilmArray Respiratory Panel in Emergency Department',
    },
    {
      title:
        'Corticosteroid treatment in severe COVID-19 pneumonia: two cases and literature review',
    },
    {
      title:
        'Emergence of Community-Acquired Adenovirus Type 55 as a Cause of Community-Onset Pneumonia',
    },
    {
      title:
        'Angiotensin II plasma levels are linked to disease severity and predict fatal outcomes in H7N9-infected patients',
    },
    {
      title:
        'Clinical features of patients infected with 2019 novel coronavirus in Wuhan, China',
    },
    {
      title:
        'A single-center, retrospective study of COVID-19 features in children: a descriptive investigation',
    },
    {
      title:
        'Spinal anaesthesia for patients with coronavirus disease 2019 and possible transmission rates in anaesthetists: retrospective, single-centre, observational cohort study',
    },
    {
      title:
        'Internal genes of a highly pathogenic H5N1 influenza virus determine high viral replication in myeloid cells and severe outcome of infection in mice',
    },
    {
      title:
        'SARS-CoV-2 infection in infants under 1 year of age in Wuhan City, China',
    },
    {
      title:
        'SARS-CoV-2 infection in infants under 1 year of age in Wuhan City, China',
    },
    {
      title:
        'Factors Associated With Prolonged Viral Shedding in Patients With Avian Influenza A(H7N9) Virus Infection',
    },
    {
      title:
        'IFITM3, TLR3, and CD55 Gene SNPs and Cumulative Genetic Risks for Severe Outcomes in Chinese Patients With H7N9/H1N1(pdm09) Influenza',
    },
    {
      title:
        'Clinical features of patients infected with 2019 novel coronavirus in Wuhan, China',
    },
    {
      title:
        'Long Term Culture of Human Kidney Proximal Tubule Epithelial Cells Maintains Lineage Functions and Serves as an Ex vivo Model for Coronavirus Associated Kidney Injury',
    },
    {
      title:
        'Mortality prediction to hospitalized patients with influenza pneumonia: PO(2)/FiO(2) combined lymphocyte count is the answer',
    },
    {
      title:
        'Clinical features of patients infected with 2019 novel coronavirus in Wuhan, China',
    },
    {
      title:
        'Clinical features of patients infected with 2019 novel coronavirus in Wuhan, China',
    },
    {
      title:
        'Identification of a novel coronavirus causing severe pneumonia in human: a descriptive study',
    },
    {
      title: 'A Novel Coronavirus (COVID-19) Outbreak: A Call for Action',
    },
    {
      title:
        'Coupled CRC 2D and ALI 3D Cultures Express Receptors of Emerging Viruses and Are More Suitable for the Study of Viral Infections Compared to Conventional Cell Lines',
    }
  ].map(({title}) => title);
  // console.log(articlesByProfessor);
  // for ( {title} of articlesByProfessor) {
  //   console.log(title);
  // }
}
