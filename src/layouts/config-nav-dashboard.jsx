import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  blank: icon('ic-blank'),
  dashboard: icon('ic-dashboard'),
  components: icon('ic-menu-item'),
  leads: icon('ic-kanban'),
  clients: icon('ic-user'),
  appointments: icon('ic-calendar'),
  assessment: icon('ic-analytics'),
  invoices: icon('ic-invoice'),
  individual: icon('ic-user'),
  company: icon('ic-folder'),
  open: icon('ic-mail'),
  closed: icon('ic-lock'),
  shared: icon('ic-external'),
  attach: icon('ic-booking'),
  active: icon('ic-label'),
  accounting: icon('ic-banking'),
  swedenRelocators: icon('ic-course'),
  lawyersPartners: icon('ic-chat'),
  publicAuthorities: icon('ic-job'),
  positive: icon('ic-label'),
  negative: icon('ic-disabled'),
  notSure: icon('ic-tour'),
  drafts: icon('ic-file'),
  deleted: icon('ic-lock'),
  individualClient: icon('ic-user'),
  companyClient: icon('ic-folder'),
  partners: icon('ic-external'),
  propertyRental: icon('ic-tour'),
  serviceRequests: icon('ic-chat'),
  subscription: icon('ic-ecommerce'),
  cbiRbi: icon('ic-banking'),
  globalVisa: icon('ic-file'),
  otherInvoices: icon('ic-label'),
  immigrationCenter: icon('ic-file'),
  immigrationApps: icon('ic-file'),
  immigrationGlobalVisas: icon('ic-file'),
  immigrationEVisa: icon('ic-mail'),
  immigrationFeeChart: icon('ic-banking'),
  immigrationEmbassyFiles: icon('ic-folder'),
  immigrationDeleted: icon('ic-lock'),
  completed: icon('ic-analytics'),
  relocationProperty: icon('ic-tour'),
  relocationBusiness: icon('ic-job'),
  businessList: icon('ic-product'),
  businessAvailable: icon('ic-folder'),
  businessInterest: icon('ic-chat'),
  businessDeals: icon('ic-order'),
  businessBookerProfiles: icon('ic-user'),
  businessDeleted: icon('ic-disabled'),
  shortRental: icon('ic-booking'),
  longTermRentals: icon('ic-product'),
  buySell: icon('ic-product'),
  approveListings: icon('ic-analytics'),
  mortgageApps: icon('ic-banking'),
  deletedClosedNotApproved: icon('ic-disabled'),
  mpsJobSeekers: icon('ic-user'),
  mpsJobAnnouncements: icon('ic-job'),
  mpsBulkOffers: icon('ic-order'),
  mpsInterest: icon('ic-chat'),
  mpsDeleted: icon('ic-disabled'),
  employeesMgmt: icon('ic-user'),
  employeesTasks: icon('ic-kanban'),
  employeesReports: icon('ic-analytics'),
  interns: icon('ic-course'),
  former: icon('ic-disabled'),
  partnersMgmt: icon('ic-external'),
  industryProfessionals: icon('ic-job'),
  serviceProviders: icon('ic-product'),
  formerPartner: icon('ic-disabled'),
   supportService: icon('ic-file'),
   supportFeedback: icon('ic-chat'),
   supportComplaint: icon('ic-mail'),
   supportTerms: icon('ic-file'),
   supportResources: icon('ic-folder'),
   supportFAQs: icon('ic-label'),
   supportTutorial: icon('ic-course'),
   supportAnnouncements: icon('ic-mail'),
   taskMyTasks: icon('ic-kanban'),
   taskAssigned: icon('ic-user'),
   taskDailyReports: icon('ic-analytics'),
   dataCenter: icon('ic-folder'),
   findIndividuals: icon('ic-user'),
   findCompanies: icon('ic-folder'),
   createBackup: icon('ic-file'),
   permissionCenter: icon('ic-lock'),
};
export const navData = [
  /**
   * Management
   */
  {
    subheader: 'Management',
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      {
        title: 'Leads Center',
        path: paths.dashboard.leadsCenter,
        icon: ICONS.leads,
        children: [
          {
            title: 'Individual Leads',
            path: paths.dashboard.leadsIndividual,
            icon: ICONS.individual,
            children: [
              { title: 'Open Leads', path: paths.dashboard.leadsIndividualOpen, icon: ICONS.open },
              { title: 'Closed Leads', path: paths.dashboard.leadsIndividualClosed, icon: ICONS.closed },
            ],
          },
          {
            title: 'Company Leads',
            path: paths.dashboard.leadsCompany,
            icon: ICONS.company,
            children: [
              { title: 'Open Leads', path: paths.dashboard.leadsCompanyOpen, icon: ICONS.open },
              { title: 'Closed Leads', path: paths.dashboard.leadsCompanyClosed, icon: ICONS.closed },
            ],
          },
        ],
      },
      {
        title: 'Client Management',
        path: paths.dashboard.clients,
        icon: ICONS.clients,
        children: [
          {
            title: 'Individual Clients',
            path: paths.dashboard.clientsIndividual,
            icon: ICONS.individual,
            children: [
              { title: 'Shared with Partners', path: paths.dashboard.clientsIndividualShared, icon: ICONS.shared },
              { title: 'Attach with Employers', path: paths.dashboard.clientsIndividualAttachEmployers, icon: ICONS.attach },
              { title: 'Active Clients', path: paths.dashboard.clientsIndividualActive, icon: ICONS.active },
            ],
          },
          {
            title: 'Company Clients',
            path: paths.dashboard.clientsCompany,
            icon: ICONS.company,
            children: [
              { title: 'Shared with Partners', path: paths.dashboard.clientsCompanyShared, icon: ICONS.shared },
              { title: 'Attach with Employees', path: paths.dashboard.clientsCompanyAttachEmployees, icon: ICONS.attach },
              { title: 'Accounting Clients', path: paths.dashboard.clientsCompanyAccounting, icon: ICONS.accounting },
            ],
          },
        ],
      },
      {
        title: 'Appointment Management',
        path: paths.dashboard.appointments,
        icon: ICONS.appointments,
        children: [
          { title: 'Sweden Relocators', path: paths.dashboard.appointmentsSwedenRelocators, icon: ICONS.swedenRelocators },
          { title: 'Lawyers-Partners', path: paths.dashboard.appointmentsLawyersPartners, icon: ICONS.lawyersPartners },
          { title: 'Public Authorities', path: paths.dashboard.appointmentsPublicAuthorities, icon: ICONS.publicAuthorities },
        ],
      },
      {
        title: 'Assessment Center',
        path: paths.dashboard.assessment,
        icon: ICONS.assessment,
        children: [
          { title: 'Positive Assessments', path: paths.dashboard.assessmentPositive, icon: ICONS.positive },
          { title: 'Negative', path: paths.dashboard.assessmentNegative, icon: ICONS.negative },
          { title: 'Not Sure', path: paths.dashboard.assessmentNotSure, icon: ICONS.notSure },
          { title: 'Drafts', path: paths.dashboard.assessmentDrafts, icon: ICONS.drafts },
          { title: 'Deleted', path: paths.dashboard.assessmentDeleted, icon: ICONS.deleted },
        ],
      },
      {
        title: 'Invoice Management',
        path: paths.dashboard.invoices,
        icon: ICONS.invoices,
        children: [
          { title: 'Individual Client Invoices', path: paths.dashboard.invoicesIndividualClient, icon: ICONS.individualClient },
          { title: 'Company Clients Invoices', path: paths.dashboard.invoicesCompanyClient, icon: ICONS.companyClient },
          { title: 'Partners Invoices', path: paths.dashboard.invoicesPartners, icon: ICONS.partners },
          { title: 'Property Rental Invoices', path: paths.dashboard.invoicesPropertyRental, icon: ICONS.propertyRental },
          { title: 'Service Requests Invoices', path: paths.dashboard.invoicesServiceRequests, icon: ICONS.serviceRequests },
          { title: 'Subscription Invoices', path: paths.dashboard.invoicesSubscription, icon: ICONS.subscription },
          { title: 'CBI-RBI Invoices', path: paths.dashboard.invoicesCBIRBI, icon: ICONS.cbiRbi },
          { title: 'Global Visa Invoices', path: paths.dashboard.invoicesGlobalVisa, icon: ICONS.globalVisa },
          { title: 'Other Invoices', path: paths.dashboard.invoicesOther, icon: ICONS.otherInvoices },
        ],
      },
    ],
  },
  /**
   * Immigration
   */
  {
    subheader: 'Immigration',
    items: [
      {
        title: 'Global Visa Center',
        path: paths.dashboard.immigrationGlobalVisaCenter,
        icon: ICONS.immigrationCenter,
        children: [
          { title: 'Global Visas Applications', path: paths.dashboard.immigrationGvcGlobalVisasApplications, icon: ICONS.immigrationGlobalVisas },
          { title: 'E-Visa Applications', path: paths.dashboard.immigrationGvcEVisaApplications, icon: ICONS.immigrationEVisa },
          { title: 'Visas & Service Fee Chart', path: paths.dashboard.immigrationGvcFeeChart, icon: ICONS.immigrationFeeChart },
          { title: 'Embassy Files', path: paths.dashboard.immigrationGvcEmbassyFiles, icon: ICONS.immigrationEmbassyFiles },
          { title: 'Deleted', path: paths.dashboard.immigrationGvcDeleted, icon: ICONS.immigrationDeleted },
        ],
      },
      {
        title: 'Applications Management',
        path: paths.dashboard.immigrationApplicationsManagement,
        icon: ICONS.immigrationApps,
        children: [
          { title: 'Individual Applications', path: paths.dashboard.immigrationAppsIndividual, icon: ICONS.individual },
          {
            title: 'Company Applications',
            path: paths.dashboard.immigrationAppsCompany,
            icon: ICONS.company,
            children: [
              { title: 'Active Application', path: paths.dashboard.immigrationAppsCompanyActive, icon: ICONS.active },
              { title: 'Open Application', path: paths.dashboard.immigrationAppsCompanyOpen, icon: ICONS.open },
              { title: 'Completed Application', path: paths.dashboard.immigrationAppsCompanyCompleted, icon: ICONS.completed },
            ],
          },
        ],
      },
    ],
  },
  /**
   * Relocation
   */
  {
    subheader: 'Relocation',
    items: [
      {
        title: 'Property Management',
        path: paths.dashboard.relocationPropertyManagement,
        icon: ICONS.relocationProperty,
        children: [
          { title: 'Short Rental', path: paths.dashboard.relocationPropertyShortRental, icon: ICONS.shortRental },
          { title: 'Long Term Rentals', path: paths.dashboard.relocationPropertyLongTermRentals, icon: ICONS.longTermRentals },
          { title: 'Buy-Sell Properties', path: paths.dashboard.relocationPropertyBuySell, icon: ICONS.buySell },
          { title: 'Approve Listings', path: paths.dashboard.relocationPropertyApproveListings, icon: ICONS.approveListings },
          { title: 'Mortgage Applications', path: paths.dashboard.relocationPropertyMortgageApplications, icon: ICONS.mortgageApps },
          { title: 'Deleted-Closed-Not Approved', path: paths.dashboard.relocationPropertyDeletedClosedNotApproved, icon: ICONS.deletedClosedNotApproved },
        ],
      },
      {
        title: 'Business Center',
        path: paths.dashboard.relocationBusinessCenter,
        icon: ICONS.relocationBusiness,
        children: [
          { title: 'List Business', path: paths.dashboard.relocationBusinessListBusiness, icon: ICONS.businessList },
          { title: 'Available Listing', path: paths.dashboard.relocationBusinessAvailableListing, icon: ICONS.businessAvailable },
          { title: 'Interest Shown', path: paths.dashboard.relocationBusinessInterestShown, icon: ICONS.businessInterest },
          { title: 'Deals in Process', path: paths.dashboard.relocationBusinessDealsInProcess, icon: ICONS.businessDeals },
          { title: 'Property Booker Profiles', path: paths.dashboard.relocationBusinessBookerProfiles, icon: ICONS.businessBookerProfiles },
          { title: 'Deleted', path: paths.dashboard.relocationBusinessDeleted, icon: ICONS.businessDeleted },
        ],
      },
    ],
  },
  /**
   * Man Power Solutions
   */
  {
    subheader: 'Man Power Solutions',
    items: [
      { title: 'Job Seekers', path: paths.dashboard.manpowerJobSeekers, icon: ICONS.mpsJobSeekers },
      { title: 'Job Announcements', path: paths.dashboard.manpowerJobAnnouncements, icon: ICONS.mpsJobAnnouncements },
      { title: 'Bulk Job Offers', path: paths.dashboard.manpowerBulkJobOffers, icon: ICONS.mpsBulkOffers },
      { title: 'Interest Shown', path: paths.dashboard.manpowerInterestShown, icon: ICONS.mpsInterest },
      { title: 'Deleted', path: paths.dashboard.manpowerDeleted, icon: ICONS.mpsDeleted },
    ],
  },
  /**
   * Employee
   */
  {
    subheader: 'Employee',
    items: [
      {
        title: 'Employees Management',
        path: paths.dashboard.employeesManagement,
        icon: ICONS.employeesMgmt,
        children: [
          { title: 'Interns', path: paths.dashboard.employeesManagementInterns, icon: ICONS.interns },
          { title: 'Active Employees', path: paths.dashboard.employeesManagementActive, icon: ICONS.active },
          { title: 'Former Employees', path: paths.dashboard.employeesManagementFormer, icon: ICONS.former },
        ],
      },
      { title: 'Employees Tasks', path: paths.dashboard.employeesTasks, icon: ICONS.employeesTasks },
      { title: 'Daily Reports', path: paths.dashboard.employeesDailyReports, icon: ICONS.employeesReports },
    ],
  },
  /**
   * Partners
   */
  {
    subheader: 'Partners',
    items: [
      {
        title: 'Partner Management',
        path: paths.dashboard.partnersManagement,
        icon: ICONS.partnersMgmt,
        children: [
          { title: 'Industry Professionals', path: paths.dashboard.partnersManagementIndustryProfessionals, icon: ICONS.industryProfessionals },
          { title: 'Service Providers', path: paths.dashboard.partnersManagementServiceProviders, icon: ICONS.serviceProviders },
          { title: 'Former Partners', path: paths.dashboard.partnersManagementFormer, icon: ICONS.formerPartner },
        ],
      },
    ],
  },
  /**
   * Support & Agreements
   */
  {
    subheader: 'Support & Agreements',
    items: [
      { title: 'Service Agreements', path: paths.dashboard.supportServiceAgreements, icon: ICONS.supportService },
      { title: 'Feedback & Reviews', path: paths.dashboard.supportFeedbackReviews, icon: ICONS.supportFeedback },
      { title: 'Complaint Center', path: paths.dashboard.supportComplaintCenter, icon: ICONS.supportComplaint },
      { title: 'Terms & Conditions', path: paths.dashboard.supportTermsConditions, icon: ICONS.supportTerms },
      { title: 'Resources & Bolags', path: paths.dashboard.supportResourcesBolags, icon: ICONS.supportResources },
      { title: 'FAQs', path: paths.dashboard.supportFAQs, icon: ICONS.supportFAQs },
      { title: 'Tutorial Videos', path: paths.dashboard.supportTutorialVideos, icon: ICONS.supportTutorial },
      { title: 'Announcements', path: paths.dashboard.supportAnnouncements, icon: ICONS.supportAnnouncements },
    ],
  },
  /**
   * Tasks Manager
   */
  {
    subheader: 'Tasks Manager',
    items: [
      { title: 'My Tasks-To Do List', path: paths.dashboard.tasksManagerMyTasks, icon: ICONS.taskMyTasks },
      { title: 'Assigned Tasks', path: paths.dashboard.tasksManagerAssigned, icon: ICONS.taskAssigned },
      { title: 'Daily Reports', path: paths.dashboard.tasksManagerDailyReports, icon: ICONS.taskDailyReports },
    ],
  },
  /**
   * Date & Permissions
   */
  {
    subheader: 'Date & Permissions',
    items: [
      {
        title: 'Data Center',
        path: paths.dashboard.dataCenter,
        icon: ICONS.dataCenter,
        children: [
          { title: 'Find Individuals', path: paths.dashboard.dataCenterFindIndividuals, icon: ICONS.findIndividuals },
          { title: 'Find Companies', path: paths.dashboard.dataCenterFindCompanies, icon: ICONS.findCompanies },
          { title: 'Create Backup', path: paths.dashboard.dataCenterCreateBackup, icon: ICONS.createBackup },
        ],
      },
      { title: 'Permission Center', path: paths.dashboard.permissionCenter, icon: ICONS.permissionCenter },
    ],
  },
  /**
   * My Business
   */
  {
    subheader: 'My Business',
    items: [
      { title: 'Subscriptions', path: paths.dashboard.myBusinessSubscriptions, icon: ICONS.subscription },
    ],
  },
  /**
   * Admin Overview
   */
  {
    subheader: 'Admin Overview',
    items: [
      {
        title: 'Records Center',
        path: paths.dashboard.adminRecordsCenter,
        icon: ICONS.dataCenter,
        children: [
          { title: 'Individuals', path: paths.dashboard.adminRecordsCenterIndividuals, icon: ICONS.individual },
          { title: 'Companies', path: paths.dashboard.adminRecordsCenterCompanies, icon: ICONS.company },
          { title: 'Employees', path: paths.dashboard.adminRecordsCenterEmployees, icon: ICONS.employeesMgmt },
          { title: 'Partners', path: paths.dashboard.adminRecordsCenterPartners, icon: ICONS.partnersMgmt },
          { title: 'Applications', path: paths.dashboard.adminRecordsCenterApplications, icon: ICONS.immigrationApps },
        ],
      },
    ],
  },
];
