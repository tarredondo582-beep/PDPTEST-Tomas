/**
 * Pueblo de Palmas — Bilingual (EN/ES) Translation System
 * Drop this file into your repo root, then follow the instructions
 * in LANGUAGE_TOGGLE_INSTRUCTIONS.html to wire it into each page.
 *
 * Usage:
 *   1. Add data-i18n="key" attributes to any element you want translated.
 *   2. Include <script src="translations.js"></script> before </body>.
 *   3. Add the toggle button snippet from the instructions file.
 */

const TRANSLATIONS = {

  /* ─────────────────────────────────────────
     SHARED / GLOBAL (nav, banner, footer)
  ───────────────────────────────────────── */
  "banner": {
    en: "🎉 Seller Paid Closing Costs on Select Properties — View Available Lots",
    es: "🎉 Costos de Cierre Pagados por el Vendedor en Propiedades Seleccionadas — Ver Lotes Disponibles"
  },
  "nav.properties": { en: "Properties", es: "Propiedades" },
  "nav.how-it-works": { en: "How It Works", es: "Cómo Funciona" },
  "nav.seller-services": { en: "Seller Services", es: "Servicios al Vendedor" },
  "nav.contact": { en: "Contact Us", es: "Contáctenos" },
  "nav.portal": { en: "Customer Portal", es: "Portal del Cliente" },
  "nav.pay": { en: "💳 Make a Payment", es: "💳 Hacer un Pago" },

  "footer.tagline": {
    en: "Helping buyers and sellers complete owner-financed land transactions with clear disclosures and servicing support.",
    es: "Ayudamos a compradores y vendedores a completar transacciones de tierra con financiamiento del propietario, con divulgaciones claras y apoyo de servicio."
  },
  "footer.office-label": { en: "Office", es: "Oficina" },
  "footer.hours": { en: "Mon–Fri 8:30 AM – 5:30 PM", es: "Lun–Vie 8:30 AM – 5:30 PM" },
  "footer.mailing": { en: "Mailing Address", es: "Dirección Postal" },
  "footer.links-label": { en: "Links", es: "Enlaces" },
  "footer.disclaimer": {
    en: "Prices and availability change daily without notice. Prices shown are for information purposes only. All dimensions approximate. Buyers should obtain a survey and confirm all details with proper authorities.",
    es: "Los precios y la disponibilidad cambian diariamente sin previo aviso. Los precios mostrados son solo para fines informativos. Todas las dimensiones son aproximadas. Los compradores deben obtener un levantamiento topográfico y confirmar todos los detalles con las autoridades correspondientes."
  },
  "footer.copyright": {
    en: "© 2026 Pueblo de Palmas Inc. · NMLS #319106 Prices subject to change without notice",
    es: "© 2026 Pueblo de Palmas Inc. · NMLS #319106 Precios sujetos a cambio sin previo aviso"
  },
  "footer.link.seller": { en: "Seller Services", es: "Servicios al Vendedor" },
  "footer.link.pay": { en: "Make a Payment", es: "Hacer un Pago" },
  "footer.link.complaint": { en: "Consumer Complaint Notice", es: "Aviso de Queja del Consumidor" },
  "footer.link.nmls": { en: "NMLS Consumer Access", es: "Acceso del Consumidor NMLS" },

  "mobile.call": { en: "📞 Call", es: "📞 Llamar" },
  "mobile.portal": { en: "🔐 Portal", es: "🔐 Portal" },
  "mobile.pay": { en: "💳 Pay", es: "💳 Pagar" },

  /* ─────────────────────────────────────────
     HOME PAGE (index.html)
  ───────────────────────────────────────── */
  "home.hero.headline": {
    en: "Simple Land Ownership Starts Here",
    es: "La Propiedad de Tierra Simple Comienza Aquí"
  },
  "home.hero.sub": {
    en: "Affordable lots across the RGV with seller-finance options and clear loan disclosures.",
    es: "Lotes asequibles en todo el Valle del Río Grande con opciones de financiamiento del vendedor y divulgaciones de préstamo claras."
  },
  "home.hero.cta.view": { en: "View All Properties", es: "Ver Todas las Propiedades" },
  "home.hero.cta.call": { en: "Call (956) 383-3222", es: "Llamar (956) 383-3222" },

  "home.stats.subdivisions": { en: "Subdivisions", es: "Subdivisiones" },
  "home.stats.cities": { en: "Cities", es: "Ciudades" },
  "home.stats.lots": { en: "Lots Available", es: "Lotes Disponibles" },
  "home.stats.financing": { en: "Seller\nFinancing", es: "Financiamiento\ndel Vendedor" },

  "home.filter.show": { en: "Show:", es: "Mostrar:" },
  "home.filter.city-label": { en: "Filter by City", es: "Filtrar por Ciudad" },
  "home.filter.all-cities": { en: "All Cities", es: "Todas las Ciudades" },
  "home.filter.size-label": { en: "Filter by Size", es: "Filtrar por Tamaño" },
  "home.filter.all-sizes": { en: "All Sizes", es: "Todos los Tamaños" },
  "home.filter.city-size": { en: "City Size", es: "Tamaño de Ciudad" },
  "home.filter.half-2": { en: "½–2 Acre", es: "½–2 Acres" },
  "home.filter.3plus": { en: "3+ Acres", es: "3+ Acres" },
  "home.filter.10plus": { en: "10+ Acre Ranches", es: "Ranchos de 10+ Acres" },
  "home.filter.status.available": { en: "Available", es: "Disponible" },
  "home.filter.status.coming": { en: "Coming Soon", es: "Próximamente" },
  "home.filter.status.sold": { en: "Sold Out", es: "Agotado" },

  "home.map.title": { en: "Browse by Location", es: "Explorar por Ubicación" },
  "home.map.sub": {
    en: "Tap a subdivision pin or list item to view lot map, pricing, and directions.",
    es: "Toque un pin de subdivisión o un elemento de la lista para ver el mapa de lotes, precios y direcciones."
  },
  "home.map.hide": { en: "Hide Map View", es: "Ocultar Vista del Mapa" },
  "home.map.show": { en: "Show Map View", es: "Mostrar Vista del Mapa" },
  "home.subdivisions.title": { en: "Available Subdivisions", es: "Subdivisiones Disponibles" },
  "home.subdivisions.sub": {
    en: "Click any property to view interactive lot map, pricing & details",
    es: "Haga clic en cualquier propiedad para ver el mapa de lotes interactivo, precios y detalles"
  },
  "home.no-match": { en: "No properties match that filter.", es: "Ninguna propiedad coincide con ese filtro." },

  "home.plat.title": { en: "📄 Interactive Plat Map — Tap Any Highlighted Lot", es: "📄 Mapa de Plat Interactivo — Toque Cualquier Lote Resaltado" },
  "home.plat.legend.available": { en: "Available", es: "Disponible" },
  "home.plat.legend.sold": { en: "Sold", es: "Vendido" },
  "home.plat.legend.pending": { en: "Pending", es: "Pendiente" },
  "home.plat.legend.reserved": { en: "Reserved", es: "Reservado" },
  "home.plat.tab.all": { en: "All", es: "Todos" },
  "home.plat.tab.available": { en: "Available", es: "Disponible" },
  "home.plat.tab.pending": { en: "Pending", es: "Pendiente" },
  "home.plat.tab.sold": { en: "Sold", es: "Vendido" },

  "home.photos.title": { en: "📸 Property Photos", es: "📸 Fotos de la Propiedad" },
  "home.video.title": { en: "🎥 Property Video Tour", es: "🎥 Recorrido en Video de la Propiedad" },
  "home.faq.title": { en: "❓ Frequently Asked Questions", es: "❓ Preguntas Frecuentes" },
  "home.inventory.title": { en: "📊 Inventory Summary", es: "📊 Resumen de Inventario" },
  "home.inventory.available": { en: "Available", es: "Disponible" },
  "home.inventory.sold": { en: "Sold", es: "Vendido" },
  "home.inventory.pending": { en: "Pending", es: "Pendiente" },

  "home.estimator.title": { en: "🧮 Payment Estimator", es: "🧮 Calculadora de Pagos" },
  "home.estimator.price": { en: "Purchase Price", es: "Precio de Compra" },
  "home.estimator.down": { en: "Down Payment (%)", es: "Pago Inicial (%)" },
  "home.estimator.rate": { en: "Interest Rate (%)", es: "Tasa de Interés (%)" },
  "home.estimator.term": { en: "Term (Years)", es: "Plazo (Años)" },
  "home.estimator.result": { en: "Estimated Monthly Payment", es: "Pago Mensual Estimado" },
  "home.estimator.disclaimer": {
    en: "This is an estimate only. Actual terms, rates and payments are confirmed by our office. Call us to discuss your options.",
    es: "Esto es solo una estimación. Los términos, tasas y pagos reales son confirmados por nuestra oficina. Llámenos para discutir sus opciones."
  },

  "home.interest.title": { en: "✉️ Express Interest", es: "✉️ Expresar Interés" },
  "home.interest.select": { en: "— Select a Lot —", es: "— Seleccionar un Lote —" },
  "home.interest.send": { en: "📨 Send Inquiry", es: "📨 Enviar Consulta" },
  "home.interest.or": { en: "Or call:", es: "O llame:" },

  "home.location.title": { en: "📍 Location Map", es: "📍 Mapa de Ubicación" },
  "home.location.gmaps": { en: "Open in Google Maps →", es: "Abrir en Google Maps →" },

  "home.lot.price-label": { en: "Purchase Price / Seller-Finance Terms", es: "Precio de Compra / Términos de Financiamiento" },
  "home.lot.dimensions": { en: "Dimensions", es: "Dimensiones" },
  "home.lot.acreage": { en: "Acreage", es: "Superficie en Acres" },
  "home.lot.subdivision": { en: "Subdivision", es: "Subdivisión" },
  "home.lot.financing": { en: "Financing", es: "Financiamiento" },
  "home.lot.seller-carry": { en: "Seller Carry", es: "Financiamiento del Vendedor" },

  "home.disclaimer": {
    en: "Prices are subject to change without notice. Contact our office to confirm current pricing and availability.",
    es: "Los precios están sujetos a cambio sin previo aviso. Comuníquese con nuestra oficina para confirmar los precios y la disponibilidad actuales."
  },

  /* ─────────────────────────────────────────
     HOW IT WORKS (how-it-works.html)
  ───────────────────────────────────────── */
  "hiw.page-label": { en: "Seller-Finance Loan Origination & Servicing", es: "Originación y Servicio de Préstamos de Financiamiento del Vendedor" },
  "hiw.title": { en: "How Seller Financing Works", es: "Cómo Funciona el Financiamiento del Vendedor" },
  "hiw.intro": {
    en: "The landowner/seller finances the purchase, and Pueblo de Palmas assists with loan origination, disclosures, and servicing. Here's how the process works.",
    es: "El propietario/vendedor financia la compra, y Pueblo de Palmas ayuda con la originación del préstamo, divulgaciones y servicio. Así funciona el proceso."
  },

  "hiw.step1.title": { en: "Choose Your Lot", es: "Elija Su Lote" },
  "hiw.step1.body": {
    en: "Browse our 12 subdivisions across the Rio Grande Valley. Use the interactive plat maps to see available lots, their prices, dimensions, and acreage. Green squares = available, red = sold. Filter by city or lot size. Click any lot for full details and a payment estimate.",
    es: "Explore nuestras 12 subdivisiones en todo el Valle del Río Grande. Use los mapas de plat interactivos para ver los lotes disponibles, sus precios, dimensiones y superficie. Cuadros verdes = disponible, rojo = vendido. Filtre por ciudad o tamaño de lote. Haga clic en cualquier lote para obtener detalles completos y una estimación de pago."
  },
  "hiw.step2.title": { en: "Contact Our Office", es: "Contáctenos" },
  "hiw.step2.body": {
    en: "Call or WhatsApp us at (956) 383-3222. Our team will verify availability, answer your questions, and walk you through pricing and terms for the specific lot you want. You can also email CustomerService@PueblodePalmas.com.",
    es: "Llámenos o envíenos un WhatsApp al (956) 383-3222. Nuestro equipo verificará la disponibilidad, responderá sus preguntas y le explicará los precios y términos del lote específico que desea. También puede enviar un correo electrónico a CustomerService@PueblodePalmas.com."
  },
  "hiw.step3.title": { en: "Down Payment & Contract Signing", es: "Pago Inicial y Firma del Contrato" },
  "hiw.step3.body": {
    en: "Visit our office at 3505 E. FM 2812, Edinburg, TX to review the purchase contract, loan disclosures, and down payment requirements. The landowner/seller is the note holder; Pueblo de Palmas assists as the loan originator/broker and servicing contact. Typical down payment is around 10% of the purchase price.",
    es: "Visítenos en 3505 E. FM 2812, Edinburg, TX para revisar el contrato de compra, las divulgaciones del préstamo y los requisitos de pago inicial. El propietario/vendedor es el titular de la nota; Pueblo de Palmas asiste como originador/intermediario del préstamo y contacto de servicio. El pago inicial típico es alrededor del 10% del precio de compra."
  },
  "hiw.step4.title": { en: "Make Your Monthly Payments", es: "Realice Sus Pagos Mensuales" },
  "hiw.step4.body": {
    en: "Payments are made monthly over your agreed term (typically 15 years). Pay online, by phone, or in person. Use the Payment Estimator on any property page to preview your estimated monthly payment before you buy.",
    es: "Los pagos se realizan mensualmente durante el plazo acordado (generalmente 15 años). Pague en línea, por teléfono o en persona. Use la Calculadora de Pagos en cualquier página de propiedad para obtener una estimación de su pago mensual antes de comprar."
  },
  "hiw.step5.title": { en: "You Receive the Deed at Closing", es: "Recibe la Escritura en el Cierre" },
  "hiw.step5.body": {
    en: "At closing, the buyer receives a deed to the property. The landowner/seller retains the vendor's lien as security for the unpaid balance, and the buyer signs a deed of trust and real estate lien note. After the note is paid in full, the applicable note holder provides a release of lien so the property is owned free and clear.",
    es: "En el cierre, el comprador recibe una escritura de la propiedad. El propietario/vendedor retiene el gravamen del vendedor como garantía del saldo pendiente, y el comprador firma una escritura de fideicomiso y una nota de gravamen inmobiliario. Una vez pagada la nota en su totalidad, el titular de la nota proporciona una liberación de gravamen."
  },

  "hiw.why.title": { en: "Why Seller Financing?", es: "¿Por Qué el Financiamiento del Vendedor?" },
  "hiw.why.nocredit.title": { en: "No Credit Check", es: "Sin Verificación de Crédito" },
  "hiw.why.nocredit.body": {
    en: "Your ability to make payments matters more than your credit score.",
    es: "Su capacidad para realizar pagos importa más que su puntuación de crédito."
  },
  "hiw.why.fast.title": { en: "Fast Closing", es: "Cierre Rápido" },
  "hiw.why.fast.body": {
    en: "Seller financing can help eligible buyers move from contract to closing faster than many traditional lending paths.",
    es: "El financiamiento del vendedor puede ayudar a los compradores elegibles a avanzar del contrato al cierre más rápido que muchos caminos de préstamo tradicionales."
  },
  "hiw.why.prepay.title": { en: "No Prepayment Penalty", es: "Sin Penalidad por Pago Anticipado" },
  "hiw.why.prepay.body": {
    en: "Pay extra or pay off early anytime. You receive the deed at closing; after payoff, the applicable note holder provides a release of lien.",
    es: "Pague extra o liquide anticipadamente en cualquier momento. Recibe la escritura en el cierre; después del pago total, el titular de la nota proporciona una liberación de gravamen."
  },
  "hiw.why.real.title": { en: "Real Ownership", es: "Propiedad Real" },
  "hiw.why.real.body": {
    en: "This is a real estate purchase, not a rental. You are the buyer from day one.",
    es: "Esta es una compra de bienes raíces, no un alquiler. Usted es el comprador desde el primer día."
  },

  "hiw.faq.title": { en: "Common Questions", es: "Preguntas Comunes" },
  "hiw.cta.title": { en: "Ready to Find Your Lot?", es: "¿Listo para Encontrar Su Lote?" },
  "hiw.cta.sub": {
    en: "Browse our 12 subdivisions across the RGV with interactive plat maps and real-time availability.",
    es: "Explore nuestras 12 subdivisiones en el Valle del Río Grande con mapas de plat interactivos y disponibilidad en tiempo real."
  },
  "hiw.cta.view": { en: "View All Properties", es: "Ver Todas las Propiedades" },
  "hiw.cta.call": { en: "📞 (956) 383-3222", es: "📞 (956) 383-3222" },

  /* ─────────────────────────────────────────
     SELLER SERVICES (seller-services.html)
  ───────────────────────────────────────── */
  "ss.page-label": { en: "Texas Vacant Land Only", es: "Solo Tierra Vacante en Texas" },
  "ss.title": { en: "Seller-Finance Support for Texas Vacant Land", es: "Apoyo de Financiamiento del Vendedor para Tierra Vacante en Texas" },
  "ss.sub": {
    en: "TRID disclosure preparation, seller-finance loan origination support, and note servicing assistance for Texas landowners selling vacant lots or acreage.",
    es: "Preparación de divulgaciones TRID, apoyo de originación de préstamos de financiamiento del vendedor y asistencia de servicio de notas para propietarios de Texas que venden lotes o terrenos vacantes."
  },
  "ss.cta.consult": { en: "Request a Seller Consultation", es: "Solicitar una Consulta de Vendedor" },
  "ss.cta.call": { en: "Call (956) 383-3222", es: "Llamar (956) 383-3222" },

  "ss.built.title": { en: "Built for land sellers, noteholders, and small developers.", es: "Diseñado para vendedores de tierra, titulares de notas y pequeños desarrolladores." },
  "ss.built.body": {
    en: "Pueblo de Palmas assists Texas vacant-land sellers with the seller-finance process after terms are negotiated, including disclosure preparation, origination support, and servicing coordination.",
    es: "Pueblo de Palmas asiste a los vendedores de tierra vacante en Texas con el proceso de financiamiento del vendedor después de que se negocian los términos, incluyendo la preparación de divulgaciones, apoyo de originación y coordinación de servicio."
  },
  "ss.built.note": {
    en: "Important: Pueblo de Palmas is the loan originator/broker and note servicing contact. Pueblo de Palmas does not hold the note. The actual note holder is the landowner/seller using Pueblo de Palmas for origination and servicing support.",
    es: "Importante: Pueblo de Palmas es el originador/intermediario del préstamo y el contacto de servicio de notas. Pueblo de Palmas no es el titular de la nota. El titular real de la nota es el propietario/vendedor que usa a Pueblo de Palmas para el apoyo de originación y servicio."
  },

  "ss.fit.title": { en: "Best fit for", es: "Ideal para" },
  "ss.fit.lots.title": { en: "Texas vacant lots", es: "Lotes vacantes en Texas" },
  "ss.fit.lots.body": { en: "Individual lots, acreage tracts, and subdivision sales.", es: "Lotes individuales, parcelas y ventas de subdivisiones." },
  "ss.fit.seller.title": { en: "Seller-financed transactions", es: "Transacciones financiadas por el vendedor" },
  "ss.fit.seller.body": { en: "Landowner/seller carries the note for the buyer.", es: "El propietario/vendedor mantiene la nota para el comprador." },
  "ss.fit.trid.title": { en: "TRID-focused files", es: "Archivos enfocados en TRID" },
  "ss.fit.trid.body": { en: "Loan Estimate, Closing Disclosure, APR review, and title coordination.", es: "Estimación de Préstamo, Divulgación de Cierre, revisión de APR y coordinación de título." },
  "ss.fit.servicing.title": { en: "Ongoing note servicing", es: "Servicio continuo de notas" },
  "ss.fit.servicing.body": { en: "Payment collection support, payoff requests, and release coordination.", es: "Apoyo en cobro de pagos, solicitudes de liquidación y coordinación de liberación." },

  "ss.services.title": { en: "Services focused on vacant land transactions", es: "Servicios enfocados en transacciones de tierra vacante" },
  "ss.services.sub": {
    en: "The goal is to help sellers keep the process organized, properly documented, and easier for buyers, title companies, and noteholders to follow.",
    es: "El objetivo es ayudar a los vendedores a mantener el proceso organizado, debidamente documentado y más fácil de seguir para compradores, compañías de título y titulares de notas."
  },
  "ss.services.trid.title": { en: "TRID Disclosure Support", es: "Apoyo de Divulgación TRID" },
  "ss.services.trid.body": {
    en: "Loan Estimate and Closing Disclosure preparation support, APR review, fee placement, changed-circumstance support, and disclosure timing coordination.",
    es: "Apoyo en la preparación de la Estimación de Préstamo y Divulgación de Cierre, revisión de APR, colocación de tarifas, apoyo en circunstancias cambiadas y coordinación de tiempos de divulgación."
  },
  "ss.services.orig.title": { en: "Origination Coordination", es: "Coordinación de Originación" },
  "ss.services.orig.body": {
    en: "Seller-finance transaction intake, payment structure review, buyer/seller coordination, and title-company communication for Texas vacant land sales.",
    es: "Recepción de transacciones de financiamiento del vendedor, revisión de estructura de pagos, coordinación comprador/vendedor y comunicación con la compañía de título para ventas de tierra vacante en Texas."
  },
  "ss.services.note.title": { en: "Note Servicing Assistance", es: "Asistencia de Servicio de Notas" },
  "ss.services.note.body": {
    en: "Payment tracking support, borrower communication, payoff requests, escrow or account questions, and release coordination through the applicable noteholder.",
    es: "Apoyo en seguimiento de pagos, comunicación con el prestatario, solicitudes de liquidación, preguntas de depósito en garantía o cuenta, y coordinación de liberación a través del titular de la nota aplicable."
  },

  "ss.process.title": { en: "A cleaner process from contract to servicing", es: "Un proceso más claro desde el contrato hasta el servicio" },
  "ss.process.sub": {
    en: "Designed for sellers who want to offer financing without building an internal disclosure and servicing workflow from scratch.",
    es: "Diseñado para vendedores que desean ofrecer financiamiento sin construir un flujo de trabajo interno de divulgación y servicio desde cero."
  },
  "ss.process.step1": { en: "Transaction Intake", es: "Recepción de la Transacción" },
  "ss.process.step1.body": { en: "We collect basic property, buyer, seller, and proposed financing terms.", es: "Recopilamos información básica de la propiedad, comprador, vendedor y términos de financiamiento propuestos." },
  "ss.process.step2": { en: "Disclosure Review", es: "Revisión de Divulgación" },
  "ss.process.step2.body": { en: "We help prepare TRID disclosures and coordinate timing with the transaction file.", es: "Ayudamos a preparar las divulgaciones TRID y coordinamos los tiempos con el archivo de la transacción." },
  "ss.process.step3": { en: "Title Coordination", es: "Coordinación de Título" },
  "ss.process.step3.body": { en: "We work with the title company and parties to keep fees, payoffs, and closing details aligned.", es: "Trabajamos con la compañía de título y las partes para mantener alineadas las tarifas, liquidaciones y detalles del cierre." },
  "ss.process.step4": { en: "Servicing Setup", es: "Configuración de Servicio" },
  "ss.process.step4.body": { en: "After closing, servicing support can assist with payment tracking, borrower questions, and payoff/release requests.", es: "Después del cierre, el apoyo de servicio puede ayudar con el seguimiento de pagos, preguntas del prestatario y solicitudes de liquidación/liberación." },

  "ss.cta2.title": { en: "Talk to us about your land sale or note portfolio.", es: "Hable con nosotros sobre su venta de tierra o cartera de notas." },

  "ss.form.name": { en: "Name", es: "Nombre" },
  "ss.form.phone": { en: "Phone", es: "Teléfono" },
  "ss.form.email": { en: "Email", es: "Correo Electrónico" },
  "ss.form.county": { en: "Property County", es: "Condado de la Propiedad" },
  "ss.form.type": { en: "Transaction Type", es: "Tipo de Transacción" },
  "ss.form.type.new": { en: "New seller-financed sale", es: "Nueva venta con financiamiento del vendedor" },
  "ss.form.type.existing": { en: "Existing note servicing", es: "Servicio de nota existente" },
  "ss.form.type.multi": { en: "Multiple lots / subdivision", es: "Múltiples lotes / subdivisión" },
  "ss.form.type.portfolio": { en: "Portfolio review", es: "Revisión de cartera" },
  "ss.form.type.payoff": { en: "Payoff or release support", es: "Apoyo de liquidación o liberación" },
  "ss.form.lots": { en: "Number of Lots / Notes", es: "Número de Lotes / Notas" },
  "ss.form.price": { en: "Estimated Sale Price / Balance", es: "Precio de Venta Estimado / Saldo" },
  "ss.form.service": { en: "Service Needed", es: "Servicio Necesario" },
  "ss.form.service.trid": { en: "TRID disclosures + origination support", es: "Divulgaciones TRID + apoyo de originación" },
  "ss.form.service.servicing": { en: "Note servicing assistance", es: "Asistencia de servicio de notas" },
  "ss.form.service.both": { en: "Both origination and servicing", es: "Originación y servicio" },
  "ss.form.service.payoff": { en: "Payoff / release coordination", es: "Coordinación de liquidación / liberación" },
  "ss.form.service.unsure": { en: "Not sure yet", es: "No estoy seguro aún" },
  "ss.form.message": { en: "Message", es: "Mensaje" },
  "ss.form.submit": { en: "Send Seller Services Inquiry", es: "Enviar Consulta de Servicios al Vendedor" },
  "ss.form.note": {
    en: "Submitting this form opens your email app with the information entered. Please avoid sending sensitive personal information through email unless requested by Pueblo de Palmas through a secure process.",
    es: "Al enviar este formulario se abrirá su aplicación de correo electrónico con la información ingresada. Evite enviar información personal sensible por correo electrónico a menos que Pueblo de Palmas lo solicite mediante un proceso seguro."
  },
  "ss.compliance": {
    en: "Compliance note: Pueblo de Palmas assists with origination and servicing support for Texas vacant-land seller-finance transactions. Services are administrative and disclosure-support focused and do not replace legal, tax, or independent compliance advice from a qualified professional.",
    es: "Nota de cumplimiento: Pueblo de Palmas asiste con el apoyo de originación y servicio para transacciones de tierra vacante con financiamiento del vendedor en Texas. Los servicios son de naturaleza administrativa y de apoyo en divulgaciones y no reemplazan el asesoramiento legal, fiscal o de cumplimiento independiente de un profesional calificado."
  },

  /* ─────────────────────────────────────────
     CONTACT (contact.html)
  ───────────────────────────────────────── */
  "contact.title": { en: "Contact Pueblo de Palmas", es: "Contactar a Pueblo de Palmas" },
  "contact.intro": {
    en: "We're here Monday through Friday, 8:30 AM to 5:30 PM. Call, text, email, or WhatsApp — whatever works best for you.",
    es: "Estamos disponibles de lunes a viernes, de 8:30 AM a 5:30 PM. Llame, envíe un mensaje de texto, correo electrónico o WhatsApp — lo que sea más conveniente para usted."
  },
  "contact.about.title": { en: "About Us", es: "Sobre Nosotros" },
  "contact.about.body": {
    en: "Pueblo de Palmas, Inc. is a family-owned, Rio Grande Valley company assisting with owner-financed land transactions across Hidalgo and Starr Counties. We help buyers and sellers move through the purchase process with clear terms, loan disclosures, and servicing support. Licensed under NMLS #319106, Pueblo de Palmas assists as the loan originator/broker and servicing contact for seller-financed land transactions. The actual note holder is the landowner/seller, not Pueblo de Palmas. At closing, buyers receive a deed and sign a real estate lien note and deed of trust, with a vendor's lien retained by the seller until payoff. From half-acre residential lots in Donna and Edinburg to 10-acre ranch tracts in Rio Grande City, we have options for every family and budget in the Valley. Call us today and let's find your lot.",
    es: "Pueblo de Palmas, Inc. es una empresa familiar del Valle del Río Grande que asiste con transacciones de tierra con financiamiento del propietario en los condados de Hidalgo y Starr. Ayudamos a compradores y vendedores a avanzar en el proceso de compra con términos claros, divulgaciones de préstamo y apoyo de servicio. Licenciada bajo NMLS #319106, Pueblo de Palmas asiste como originador/intermediario del préstamo y contacto de servicio para transacciones de tierra con financiamiento del vendedor. El titular real de la nota es el propietario/vendedor, no Pueblo de Palmas. En el cierre, los compradores reciben una escritura y firman una nota de gravamen inmobiliario y escritura de fideicomiso, con un gravamen del vendedor retenido hasta el pago total. Desde lotes residenciales de medio acre en Donna y Edinburg hasta parcelas de rancho de 10 acres en Rio Grande City, tenemos opciones para cada familia y presupuesto en el Valle. Llámenos hoy y encontremos su lote."
  },
  "contact.office.title": { en: "🏠 Office Information", es: "🏠 Información de la Oficina" },
  "contact.hours.title": { en: "🕐 Office Hours", es: "🕐 Horario de Oficina" },
  "contact.hours.mf": { en: "Mon – Fri", es: "Lun – Vie" },
  "contact.hours.mf.time": { en: "8:30 AM – 5:30 PM", es: "8:30 AM – 5:30 PM" },
  "contact.hours.sat": { en: "Saturday", es: "Sábado" },
  "contact.hours.sat.time": { en: "By Appointment", es: "Con Cita Previa" },
  "contact.hours.sun": { en: "Sunday", es: "Domingo" },
  "contact.hours.sun.time": { en: "Closed", es: "Cerrado" },
  "contact.directions.title": { en: "📍 Get Directions", es: "📍 Obtener Direcciones" },
  "contact.directions.gmaps": { en: "Open in Google Maps →", es: "Abrir en Google Maps →" },

  "contact.form.title": { en: "Send Us a Message", es: "Envíenos un Mensaje" },
  "contact.form.first": { en: "First Name", es: "Nombre" },
  "contact.form.last": { en: "Last Name", es: "Apellido" },
  "contact.form.phone": { en: "Phone Number", es: "Número de Teléfono" },
  "contact.form.email": { en: "Email Address", es: "Correo Electrónico" },
  "contact.form.interest": { en: "I'm Interested In…", es: "Estoy Interesado En…" },
  "contact.form.select": { en: "— Select a Property —", es: "— Seleccionar una Propiedad —" },
  "contact.form.general": { en: "General Inquiry / Not Sure Yet", es: "Consulta General / No Estoy Seguro Aún" },
  "contact.form.message": { en: "Message", es: "Mensaje" },
  "contact.form.submit": { en: "📨 Send Message", es: "📨 Enviar Mensaje" },
  "contact.form.note": {
    en: "Opens your email client. Or call us directly at (956) 383-3222.",
    es: "Abre su cliente de correo electrónico. O llámenos directamente al (956) 383-3222."
  },

  "contact.call.title": { en: "Call or Text", es: "Llamar o Enviar Mensaje" },
  "contact.call.sub": { en: "Fastest way to confirm availability and get answers.", es: "La forma más rápida de confirmar disponibilidad y obtener respuestas." },
  "contact.wa.title": { en: "WhatsApp", es: "WhatsApp" },
  "contact.wa.sub": { en: "Chat with us, send photos, ask questions, schedule a visit.", es: "Chatee con nosotros, envíe fotos, haga preguntas, programe una visita." },
  "contact.wa.cta": { en: "Open WhatsApp →", es: "Abrir WhatsApp →" },
  "contact.pay.title": { en: "Make a Payment", es: "Realizar un Pago" },
  "contact.pay.sub": {
    en: "Already a customer? Pay your monthly note securely online. After payoff, the applicable note holder provides the release of lien through the servicing process.",
    es: "¿Ya es cliente? Pague su nota mensual de forma segura en línea. Después del pago total, el titular de la nota proporciona la liberación de gravamen a través del proceso de servicio."
  },
  "contact.pay.cta": { en: "Pay Online →", es: "Pagar en Línea →" }
};

/* ─────────────────────────────────────────────────────
   LANGUAGE ENGINE
   ─────────────────────────────────────────────────── */

const I18N = {
  current: localStorage.getItem('pdp-lang') || 'en',

  init() {
    this.apply(this.current);
    this._renderToggle();
  },

  apply(lang) {
    this.current = lang;
    localStorage.setItem('pdp-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const entry = TRANSLATIONS[key];
      if (!entry) return;
      const text = entry[lang] || entry['en'];
      // Placeholders support for input/select
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', text);
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.innerHTML = text;
      }
    });

    // Update toggle button appearance
    document.querySelectorAll('.pdp-lang-toggle').forEach(btn => {
      btn.setAttribute('data-active', lang);
      btn.querySelector('[data-lang="en"]').classList.toggle('active', lang === 'en');
      btn.querySelector('[data-lang="es"]').classList.toggle('active', lang === 'es');
    });
  },

  toggle() {
    this.apply(this.current === 'en' ? 'es' : 'en');
  },

  _renderToggle() {
    // If toggle containers already exist in the HTML, wire them up
    document.querySelectorAll('.pdp-lang-toggle').forEach(btn => {
      btn.querySelector('[data-lang="en"]').addEventListener('click', () => this.apply('en'));
      btn.querySelector('[data-lang="es"]').addEventListener('click', () => this.apply('es'));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
