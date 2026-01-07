// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/signin',
  DASHBOARD: '',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    signin: ROOTS.AUTH,
  },
  // DASHBOARD
  dashboard: {
    root: '/',
    blank: '/blank',
    overview: '/overview',
    components: '/components',
    // Management
    leadsCenter: '/leads',
    clients: '/clients',
    appointments: '/appointments',
    assessment: '/assessment',
    invoices: '/invoices',
    // Leads subpaths
    leadsIndividual: '/leads/individual',
    leadsIndividualOpen: '/leads/individual/open',
    leadsIndividualClosed: '/leads/individual/closed',
    leadsCompany: '/leads/company',
    leadsCompanyOpen: '/leads/company/open',
    leadsCompanyClosed: '/leads/company/closed',
    // Clients subpaths
    clientsIndividual: '/clients/individual',
    clientsIndividualShared: '/clients/individual/shared-with-partners',
    clientsIndividualAttachEmployers: '/clients/individual/attach-with-employers',
    clientsIndividualActive: '/clients/individual/active',
    clientsCompany: '/clients/company',
    clientsCompanyShared: '/clients/company/shared-with-partners',
    clientsCompanyAttachEmployees: '/clients/company/attach-with-employees',
    clientsCompanyAccounting: '/clients/company/accounting',
    // Appointments subpaths
    appointmentsSwedenRelocators: '/appointments/sweden-relocators',
    appointmentsLawyersPartners: '/appointments/lawyers-partners',
    appointmentsPublicAuthorities: '/appointments/public-authorities',
    // Assessment subpaths
    assessmentPositive: '/assessment/positive',
    assessmentNegative: '/assessment/negative',
    assessmentNotSure: '/assessment/not-sure',
    assessmentDrafts: '/assessment/drafts',
    assessmentDeleted: '/assessment/deleted',
    // Invoices subpaths
    invoicesIndividualClient: '/invoices/individual-client',
    invoicesCompanyClient: '/invoices/company-client',
    invoicesPartners: '/invoices/partners',
    invoicesPropertyRental: '/invoices/property-rental',
    invoicesServiceRequests: '/invoices/service-requests',
    invoicesSubscription: '/invoices/subscription',
    invoicesCBIRBI: '/invoices/cbi-rbi',
    invoicesGlobalVisa: '/invoices/global-visa',
    invoicesOther: '/invoices/other',
    // Immigration
    immigrationGlobalVisaCenter: '/immigration/global-visa-center',
    immigrationApplicationsManagement: '/immigration/applications-management',
    // Immigration - Global Visa Center subpaths
    immigrationGvcGlobalVisasApplications: '/immigration/global-visa-center/global-visas-applications',
    immigrationGvcEVisaApplications: '/immigration/global-visa-center/e-visa-applications',
    immigrationGvcFeeChart: '/immigration/global-visa-center/visas-service-fee-chart',
    immigrationGvcEmbassyFiles: '/immigration/global-visa-center/embassy-files',
    immigrationGvcDeleted: '/immigration/global-visa-center/deleted',
    // Immigration - Applications Management subpaths
    immigrationAppsIndividual: '/immigration/applications-management/individual',
    immigrationAppsCompany: '/immigration/applications-management/company',
    immigrationAppsCompanyActive: '/immigration/applications-management/company/active',
    immigrationAppsCompanyOpen: '/immigration/applications-management/company/open',
    immigrationAppsCompanyCompleted: '/immigration/applications-management/company/completed',
    // Relocation
    relocationPropertyManagement: '/relocation/property-management',
    relocationBusinessCenter: '/relocation/business-center',
    // Relocation - Business Center subpaths
    relocationBusinessListBusiness: '/relocation/business-center/list-business',
    relocationBusinessAvailableListing: '/relocation/business-center/available-listing',
    relocationBusinessInterestShown: '/relocation/business-center/interest-shown',
    relocationBusinessDealsInProcess: '/relocation/business-center/deals-in-process',
    relocationBusinessBookerProfiles: '/relocation/business-center/property-booker-profiles',
    relocationBusinessDeleted: '/relocation/business-center/deleted',
    // Relocation - Property Management subpaths
    relocationPropertyShortRental: '/relocation/property-management/short-rental',
    relocationPropertyLongTermRentals: '/relocation/property-management/long-term-rentals',
    relocationPropertyBuySell: '/relocation/property-management/buy-sell-properties',
    relocationPropertyApproveListings: '/relocation/property-management/approve-listings',
    relocationPropertyMortgageApplications: '/relocation/property-management/mortgage-applications',
    relocationPropertyDeletedClosedNotApproved: '/relocation/property-management/deleted-closed-not-approved',
    // Man Power Solutions
    manpowerJobSeekers: '/manpower/job-seekers',
    manpowerJobAnnouncements: '/manpower/job-announcements',
    manpowerBulkJobOffers: '/manpower/bulk-job-offers',
    manpowerInterestShown: '/manpower/interest-shown',
    manpowerDeleted: '/manpower/deleted',
    // Partners
    partnersManagement: '/partners/management',
    partnersManagementIndustryProfessionals: '/partners/management/industry-professionals',
    partnersManagementServiceProviders: '/partners/management/service-providers',
    partnersManagementFormer: '/partners/management/former',
    // Employees
    employeesManagement: '/employees/management',
    employeesTasks: '/employees/tasks',
    employeesDailyReports: '/employees/daily-reports',
    // Employees - Management subpaths
    employeesManagementInterns: '/employees/management/interns',
    employeesManagementActive: '/employees/management/active',
    employeesManagementFormer: '/employees/management/former',
  },
};
