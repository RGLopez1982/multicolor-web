// ==========================================================================
// STATIC COEFFICIENTS
// ==========================================================================
const COEFFICIENTS = {
    durlock: {
        cieloraso: {
            name: "Durlock - Cielorraso Junta Tomada",
            materials: {
                placa: { name: "Placas de Yeso 9.5mm (1.2x2.4m)", unit: "placas", perM2: 0.3646, perPerim: 0, roundType: "ceil", factor: 1, category: "Placas", packDesc: "Placa entera (2.88 m²)" },
                montante: { name: "Perfiles Montantes 34mm (2.6m)", unit: "perfiles", perM2: 1.2308, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 2.6 metros" },
                solera: { name: "Perfiles Soleras 35mm (2.6m)", unit: "perfiles", perM2: 0.4231, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 2.6 metros (Perimetral)" },
                tornillo_t1: { name: "Tornillos T1 (Punta Aguja - unión perfil/perfil)", unit: "unidades", perM2: 16.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u." },
                tornillo_t2: { name: "Tornillos T2 (Punta Aguja 25mm - placa/perfil)", unit: "unidades", perM2: 18.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u." },
                cinta: { name: "Cinta de Papel para juntas (metros)", unit: "m", perM2: 1.65, perPerim: 0, roundType: "roll75", factor: 75, category: "Masilla y Cinta", packDesc: "Rollos de 75 m" },
                masilla: { name: "Masilla lista para usar (kg)", unit: "kg", perM2: 0.90, perPerim: 0, roundType: "bucket10", factor: 10, category: "Masilla y Cinta", packDesc: "Envases de 10 / 32 kg" },
                fijacion: { name: "Fijaciones (Tarugo N° 8 + Tornillo 22x2\")", unit: "unidades", perM2: 6.0, perPerim: 0, roundType: "box100", factor: 100, category: "Fijaciones", packDesc: "Cajas de 100 u." }
            }
        },
        revestimiento: {
            name: "Durlock - Revestimiento Estándar (perfil Omega)",
            materials: {
                placa: { name: "Placas de Yeso 12.5mm (1.2x2.4m)", unit: "placas", perM2: 0.3646, perPerim: 0, roundType: "ceil", factor: 1, category: "Placas", packDesc: "Placa entera (2.88 m²)" },
                montante: { name: "Perfil Durlock Omega (2.6m)", unit: "perfiles", perM2: 1.20, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 2.6 metros" },
                tornillo_t2: { name: "Tornillos T2 (Punta Aguja 25mm)", unit: "unidades", perM2: 15.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u." },
                cinta: { name: "Cinta de Papel para juntas (metros)", unit: "m", perM2: 1.65, perPerim: 0, roundType: "roll75", factor: 75, category: "Masilla y Cinta", packDesc: "Rollos de 75 m" },
                masilla: { name: "Masilla lista para usar (kg)", unit: "kg", perM2: 0.90, perPerim: 0, roundType: "bucket10", factor: 10, category: "Masilla y Cinta", packDesc: "Envases de 10 / 32 kg" },
                fijacion: { name: "Fijaciones (Tarugo N° 8 + Tornillo)", unit: "unidades", perM2: 8.0, perPerim: 0, roundType: "box100", factor: 100, category: "Fijaciones", packDesc: "Cajas de 100 u." }
            }
        },
        pared_simple: {
            name: "Durlock - Pared Simple (Tabique Divisorio)",
            materials: {
                placa: { name: "Placas de Yeso ST 12.5mm (Dos caras)", unit: "placas", perM2: 0.7118, perPerim: 0, roundType: "ceil", factor: 1, category: "Placas", packDesc: "Placa entera (Placas en ambas caras)" },
                montante: { name: "Perfiles Montantes 69mm (2.6m)", unit: "perfiles", perM2: 1.1538, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 2.6 metros" },
                solera: { name: "Perfiles Soleras 70mm (2.6m)", unit: "perfiles", perM2: 0.3846, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 2.6 metros (Piso y Techo)" },
                tornillo_t1: { name: "Tornillos T1 (Punta Aguja)", unit: "unidades", perM2: 10.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u." },
                tornillo_t2: { name: "Tornillos T2 (Punta Aguja 25mm)", unit: "unidades", perM2: 30.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u." },
                cinta: { name: "Cinta de Papel para juntas (metros)", unit: "m", perM2: 3.30, perPerim: 0, roundType: "roll75", factor: 75, category: "Masilla y Cinta", packDesc: "Rollos de 75 m" },
                masilla: { name: "Masilla lista para usar (kg)", unit: "kg", perM2: 1.80, perPerim: 0, roundType: "bucket10", factor: 10, category: "Masilla y Cinta", packDesc: "Envases de 10 / 32 kg" },
                fijacion: { name: "Fijaciones (Tarugo N° 8 + Tornillo)", unit: "unidades", perM2: 3.5, perPerim: 0, roundType: "box100", factor: 100, category: "Fijaciones", packDesc: "Cajas de 100 u." }
            }
        },
        pared_doble: {
            name: "Durlock - Pared Doble (Doble Placa por cara)",
            materials: {
                placa: { name: "Placas de Yeso ST 12.5mm (Doble por cara)", unit: "placas", perM2: 1.4236, perPerim: 0, roundType: "ceil", factor: 1, category: "Placas", packDesc: "Placas en doble capa por cara" },
                montante: { name: "Perfiles Montantes 69mm (2.6m)", unit: "perfiles", perM2: 1.1538, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 2.6 metros" },
                solera: { name: "Perfiles Soleras 70mm (2.6m)", unit: "perfiles", perM2: 0.3846, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 2.6 metros" },
                tornillo_t1: { name: "Tornillos T1 (Punta Aguja)", unit: "unidades", perM2: 10.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u." },
                tornillo_t2: { name: "Tornillos T2 (Punta Aguja 25mm - base)", unit: "unidades", perM2: 15.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u. (Placa base)" },
                tornillo_t3: { name: "Tornillos T3 (Punta Aguja 35mm/45mm - exterior)", unit: "unidades", perM2: 30.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u. (Placa exterior)" },
                cinta: { name: "Cinta de Papel para juntas (metros)", unit: "m", perM2: 3.30, perPerim: 0, roundType: "roll75", factor: 75, category: "Masilla y Cinta", packDesc: "Rollos de 75 m (Solo exterior)" },
                masilla: { name: "Masilla lista para usar (kg)", unit: "kg", perM2: 1.80, perPerim: 0, roundType: "bucket10", factor: 10, category: "Masilla y Cinta", packDesc: "Envases de 10 / 32 kg" },
                fijacion: { name: "Fijaciones (Tarugo N° 8 + Tornillo)", unit: "unidades", perM2: 3.5, perPerim: 0, roundType: "box100", factor: 100, category: "Fijaciones", packDesc: "Cajas de 100 u." }
            }
        },
        cieloraso_desmontable: {
            name: "Durlock - Cielorraso Desmontable (0.61x0.61m)",
            materials: {
                placa_desmontable: { name: "Placas Desmontables de Yeso / Fibra (0.61x0.61m)", unit: "placas", perM2: 2.95, perPerim: 0, roundType: "ceil", factor: 1, category: "Placas", packDesc: "Placa entera (0.37 m²)" },
                larguero: { name: "Perfiles Largueros T Principal (3.66m)", unit: "perfiles", perM2: 0.45, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 3.66 metros" },
                travesano_061: { name: "Perfiles Travesaños T Terciario (0.61m)", unit: "perfiles", perM2: 2.65, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 0.61 metros" },
                angulo_perim: { name: "Perfiles Perímetro L (3.05m)", unit: "perfiles", perM2: 0.50, perPerim: 0, roundType: "ceil", factor: 1, category: "Perfiles", packDesc: "Tiras de 3.05 metros" },
                alambre: { name: "Alambre de suspensión Galvanizado (m)", unit: "m", perM2: 1.30, perPerim: 0, roundType: "ceil", factor: 1, category: "Fijaciones", packDesc: "Metros de alambre" },
                fijacion: { name: "Tarugo Nylon N°8 c/tope + Tornillo", unit: "unidades", perM2: 6.0, perPerim: 0, roundType: "box100", factor: 100, category: "Fijaciones", packDesc: "Cajas de 100 u." }
            }
        }
    },
    pvc: {
        cieloraso: {
            name: "PVC - Cielorraso Suspendido",
            materials: {
                tabla_pvc: { name: "Tablas de PVC 200mm (m lineales)", unit: "metros lin.", perM2: 5.25, perPerim: 0, roundType: "ceil", factor: 1, category: "PVC", packDesc: "Metros lineales de perfiles PVC" },
                montante: { name: "Perfiles Estructura Montantes 34mm (2.6m)", unit: "perfiles", perM2: 0.52, perPerim: 0, roundType: "ceil", factor: 1, category: "Estructura", packDesc: "Tiras de 2.6 metros" },
                solera: { name: "Perfiles Soleras 35mm (2.6m)", unit: "perfiles", perM2: 0, perPerim: 0.43, roundType: "ceil", factor: 1, category: "Estructura", packDesc: "Tiras de 2.6 metros (Perimetral)" },
                moldura_pvc: { name: "Moldura Perimetral de PVC (3m)", unit: "perfiles", perM2: 0, perPerim: 0.37, roundType: "ceil", factor: 1, category: "Estructura", packDesc: "Tiras de 3 metros (Moldura F o U)" },
                tornillo_t1: { name: "Tornillos T1 (Punta Aguja - Fijar PVC)", unit: "unidades", perM2: 12.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u. (Plana/Aguja)" },
                fijacion: { name: "Fijaciones (Tarugo N° 8 + Tornillo)", unit: "unidades", perM2: 0, perPerim: 1.5, roundType: "box100", factor: 100, category: "Fijaciones", packDesc: "Cajas de 100 u." }
            }
        },
        revestimiento: {
            name: "PVC - Revestimiento o Pared",
            materials: {
                tabla_pvc: { name: "Tablas de PVC 200mm (m lineales)", unit: "metros lin.", perM2: 5.25, perPerim: 0, roundType: "ceil", factor: 1, category: "PVC", packDesc: "Metros lineales de perfiles PVC" },
                estructura: { name: "Estructura de Montantes / Omegas (2.6m)", unit: "perfiles", perM2: 0.52, perPerim: 0, roundType: "ceil", factor: 1, category: "Estructura", packDesc: "Tiras de 2.6 metros" },
                moldura_pvc: { name: "Moldura Perimetral / Zócalo PVC (3m)", unit: "perfiles", perM2: 0, perPerim: 0.37, roundType: "ceil", factor: 1, category: "Estructura", packDesc: "Tiras de 3 metros" },
                tornillo_t1: { name: "Tornillos T1 (Punta Aguja)", unit: "unidades", perM2: 12.0, perPerim: 0, roundType: "box100", factor: 100, category: "Tornillos", packDesc: "Cajas de 100 u." },
                fijacion: { name: "Fijaciones (Tarugo N° 8 + Tornillo)", unit: "unidades", perM2: 0, perPerim: 1.5, roundType: "box100", factor: 100, category: "Fijaciones", packDesc: "Cajas de 100 u." }
            }
        }
    },
    pintura: {
        latex: {
            name: "Pintura - Látex Línea Hogar",
            materials: {
                paint: { name: "Pintura Látex Interior/Exterior (Rendimiento 11m²/L por mano)", unit: "litros", perM2: 0.0909, perPerim: 0, roundType: "paintCans", factor: 1, category: "Pintura", packDesc: "Envases enteros (1L, 4L, 10L, 20L)" }
            }
        }
    }
};

let currentResults = null;

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === 'error') {
        iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    } else if (type === 'warning') {
        iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    } else if (type === 'info') {
        iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `${iconSvg} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ==========================================================================
// CALCULATOR GEOMETRY SOLVERS
// ==========================================================================

// Optimize PVC layout to minimize waste using user selected sheet length
function solvePVCSpan(span, cross, wPlate, lPlate) {
    if (span <= lPlate) {
        const numPlates = Math.ceil(cross / wPlate);
        const totalLinMeters = numPlates * lPlate;
        const totalAreaBought = totalLinMeters * wPlate;
        const roomArea = span * cross;
        const waste = totalAreaBought - roomArea;
        
        return {
            directionSpan: span,
            directionCross: cross,
            singlePlateLength: lPlate,
            numPlates: numPlates,
            totalLinMeters: totalLinMeters,
            waste: waste,
            requiresUnion: false,
            p1: lPlate,
            p2: 0,
            description: `${numPlates} placas de ${lPlate}m`
        };
    } else {
        const platesPerRun = Math.ceil(span / lPlate);
        const numRuns = Math.ceil(cross / wPlate);
        const totalPlates = platesPerRun * numRuns;
        
        const totalLinMeters = totalPlates * lPlate;
        const totalAreaBought = totalLinMeters * wPlate;
        const roomArea = span * cross;
        const waste = totalAreaBought - roomArea;
        
        return {
            directionSpan: span,
            directionCross: cross,
            numPlates: totalPlates,
            totalLinMeters: totalLinMeters,
            waste: waste,
            requiresUnion: true,
            p1: lPlate,
            p2: lPlate,
            description: `${totalPlates} placas de ${lPlate}m`
        };
    }
}

// Solve commercial paint cans
function solvePaintCans(litres) {
    let exact = Math.ceil(litres);
    if (exact <= 0) return { suggested: 0, desc: "0 litros" };
    if (exact <= 1) return { suggested: 1, desc: "1 lata de 1L" };
    if (exact <= 4) return { suggested: 4, desc: "1 lata de 4L" };
    if (exact <= 10) return { suggested: 10, desc: "1 lata de 10L" };
    if (exact <= 20) return { suggested: 20, desc: "1 lata de 20L" };
    
    let cans20 = Math.floor(exact / 20);
    let remainder = exact % 20;
    let extraDesc = "";
    let totalSuggested = cans20 * 20;
    
    if (remainder > 0) {
        if (remainder <= 1) {
            extraDesc = " + 1 lata de 1L";
            totalSuggested += 1;
        } else if (remainder <= 4) {
            extraDesc = " + 1 lata de 4L";
            totalSuggested += 4;
        } else if (remainder <= 10) {
            extraDesc = " + 1 lata de 10L";
            totalSuggested += 10;
        } else if (remainder <= 14) {
            extraDesc = " + 1 lata de 10L + 1 lata de 4L";
            totalSuggested += 14;
        } else {
            extraDesc = " + 1 lata de 20L (o 2 de 10L)";
            totalSuggested += 20;
        }
    }
    
    let mainDesc = `${cans20} lata(s) de 20L` + extraDesc;
    return { suggested: totalSuggested, desc: mainDesc };
}

function calculateMaterialQuantities(system, projectType, area, perimeter, pvcParams = null, paintHands = 2) {
    const projData = COEFFICIENTS[system][projectType];
    if (!projData) return null;

    const materials = projData.materials;
    const results = [];
    let pOptim = null;

    if (system === 'pvc' && pvcParams) {
        const { wRoom, lRoom, wPlate, lPlate, selectedDirection } = pvcParams;
        const optA = solvePVCSpan(wRoom, lRoom, wPlate, lPlate);
        const optB = solvePVCSpan(lRoom, wRoom, wPlate, lPlate);

        optA.nameDirection = "Paralelo al Ancho";
        optB.nameDirection = "Paralelo al Largo";

        if (selectedDirection === 'width') {
            pOptim = optA;
        } else if (selectedDirection === 'length') {
            pOptim = optB;
        } else {
            if (optA.waste < optB.waste) {
                pOptim = optA;
            } else if (optB.waste < optA.waste) {
                pOptim = optB;
            } else {
                if (!optA.requiresUnion && optB.requiresUnion) {
                    pOptim = optA;
                } else if (optB.requiresUnion && !optA.requiresUnion) {
                    pOptim = optB;
                } else {
                    pOptim = optA;
                }
            }
        }
    }

    for (const key in materials) {
        const mat = materials[key];
        
        let totalExact = 0;
        let totalSuggested = 0;
        let suggestionDetail = "";

        if (system === 'pvc' && key === 'tabla_pvc') {
            const pL = parseFloat(pvcParams.lPlate) || 4.0;
            const pW = parseFloat(pvcParams.wPlate) || 0.20;
            const count = Math.floor(area / (pL * pW)) + 1;
            totalExact = count;
            totalSuggested = count;
            suggestionDetail = `${count} unidades (placas de ${pL}m de largo)`;
        } else if (system === 'pintura' && key === 'paint') {
            totalExact = area * mat.perM2 * paintHands;
            const solved = solvePaintCans(totalExact);
            totalSuggested = solved.suggested;
            suggestionDetail = solved.desc;
        } else {
            const valFromArea = area * mat.perM2;
            const valFromPerim = perimeter * mat.perPerim;
            totalExact = valFromArea + valFromPerim;

            if (mat.roundType === "ceil") {
                totalSuggested = Math.ceil(totalExact);
                suggestionDetail = `${totalSuggested} ${mat.unit}`;
            } else if (mat.roundType === "box100") {
                const boxes = Math.ceil(totalExact / mat.factor);
                totalSuggested = boxes * mat.factor;
                suggestionDetail = `${totalSuggested} u. (${boxes} ${boxes === 1 ? 'Caja' : 'Cajas'} de ${mat.factor})`;
            } else if (mat.roundType === "roll75") {
                const rolls = Math.ceil(totalExact / mat.factor);
                totalSuggested = rolls * mat.factor;
                suggestionDetail = `${totalSuggested} m (${rolls} ${rolls === 1 ? 'Rollo' : 'Rollos'} de ${mat.factor}m)`;
            } else if (mat.roundType === "bucket10") {
                totalSuggested = Math.ceil(totalExact);
                let packText = "";
                if (totalSuggested <= 5) {
                    packText = "Sugerido: 1 balde de 5 kg";
                } else if (totalSuggested <= 10) {
                    packText = "Sugerido: 1 balde de 10 kg";
                } else if (totalSuggested <= 20) {
                    packText = "Sugerido: 1 balde de 20 kg (o 2 de 10kg)";
                } else {
                    const baldes32 = Math.floor(totalSuggested / 32);
                    const resto = totalSuggested % 32;
                    if (baldes32 > 0) {
                        packText = `Sugerido: ${baldes32} balde(s) de 32 kg`;
                        if (resto > 0) {
                            packText += ` + 1 balde de ${resto <= 10 ? '10 kg' : '20 kg'}`;
                        }
                    } else {
                        packText = "Sugerido: 1 balde de 32 kg";
                    }
                }
                suggestionDetail = `${totalSuggested} kg (${packText})`;
            } else {
                totalSuggested = Math.ceil(totalExact);
                suggestionDetail = `${totalSuggested} ${mat.unit}`;
            }
        }

        let matName = mat.name;
        if (system === 'pvc' && key === 'tabla_pvc' && pvcParams) {
            const widthMM = Math.round(pvcParams.wPlate * 1000);
            const pL = parseFloat(pvcParams.lPlate) || 4.0;
            matName = `Tablas de PVC ${widthMM}mm (Largo: ${pL}m)`;
        }

        results.push({
            key: key,
            name: matName,
            category: mat.category,
            unit: (system === 'pvc' && key === 'tabla_pvc') ? "unidades" : mat.unit,
            exact: totalExact,
            suggested: totalSuggested,
            suggestedText: suggestionDetail,
            packDesc: (system === 'pvc' && key === 'tabla_pvc') ? `Placa entera de ${pvcParams.lPlate} metros` : mat.packDesc
        });
    }

    if (system === 'pvc' && pOptim && pOptim.requiresUnion) {
        const jointLength = pOptim.directionCross;
        const totalUnionProfiles = Math.ceil(jointLength / 3.0);
        
        results.push({
            key: "perfil_union",
            name: "Perfil Unión H de PVC (3m)",
            category: "PVC",
            unit: "tiras",
            exact: jointLength,
            suggested: totalUnionProfiles,
            suggestedText: `${totalUnionProfiles} tiras (de 3.0m)`,
            packDesc: "Unión H para acople de placas PVC"
        });
    }

    return {
        system: system,
        projectType: projectType,
        projectName: projData.name,
        area: area,
        perimeter: perimeter,
        materials: results,
        pvcOptim: pOptim,
        paintHands: paintHands
    };
}

// Main Calculation Trigger
function performCalculation() {
    const system = document.getElementById("current-system-input").value;
    const projectTypeSelect = document.getElementById("project-type");
    const projectType = projectTypeSelect ? projectTypeSelect.value : "latex";

    let area = 0;
    let perimeter = 0;
    let pvcParams = null;
    let paintHands = 2;

    if (system === 'durlock') {
        const wInput = document.getElementById("durlock-width");
        const lInput = document.getElementById("durlock-length");
        if (!wInput || !lInput) return;

        const wRoom = parseFloat(wInput.value);
        const lRoom = parseFloat(lInput.value);

        if (isNaN(wRoom) || wRoom <= 0 || isNaN(lRoom) || lRoom <= 0) {
            showToast("Por favor, ingresa un ancho y largo válidos mayor a 0.", "warning");
            return;
        }

        area = wRoom * lRoom;
        perimeter = 2 * (wRoom + lRoom);
    } else if (system === 'pvc') {
        const wInput = document.getElementById("pvc-width");
        const lInput = document.getElementById("pvc-length");
        const plateWidthSelect = document.getElementById("pvc-plate-width");
        const plateLengthSelect = document.getElementById("pvc-plate-length");
        const directionSelect = document.getElementById("pvc-direction");

        if (!wInput || !lInput || !plateWidthSelect || !plateLengthSelect || !directionSelect) return;

        const wRoom = parseFloat(wInput.value);
        const lRoom = parseFloat(lInput.value);

        if (isNaN(wRoom) || wRoom <= 0 || isNaN(lRoom) || lRoom <= 0) {
            showToast("Por favor, ingresa un ancho y largo válidos mayor a 0.", "warning");
            return;
        }

        const wPlate = parseFloat(plateWidthSelect.value) / 1000.0;
        const lPlate = parseFloat(plateLengthSelect.value);
        const selectedDirection = directionSelect.value;

        area = wRoom * lRoom;
        perimeter = 2 * (wRoom + lRoom);

        pvcParams = {
            wRoom: wRoom,
            lRoom: lRoom,
            wPlate: wPlate,
            lPlate: lPlate,
            selectedDirection: selectedDirection
        };
    } else if (system === 'pintura') {
        const wInput = document.getElementById("paint-width");
        const hInput = document.getElementById("paint-height");
        const handsSelect = document.getElementById("paint-hands");

        if (!wInput || !hInput || !handsSelect) return;

        const wRoom = parseFloat(wInput.value);
        const hRoom = parseFloat(hInput.value);
        paintHands = parseInt(handsSelect.value) || 2;

        if (isNaN(wRoom) || wRoom <= 0 || isNaN(hRoom) || hRoom <= 0) {
            showToast("Por favor, ingresa un ancho y alto válidos mayor a 0.", "warning");
            return;
        }

        area = wRoom * hRoom;
        perimeter = 2 * (wRoom + hRoom);
    }

    const results = calculateMaterialQuantities(system, projectType, area, perimeter, pvcParams, paintHands);
    
    if (results) {
        renderResults(results);
        showToast("Materiales calculados con éxito.");
    } else {
        showToast("Error al calcular materiales.", "error");
    }
}

// Reset Calculation Form
function resetCalculation() {
    const form = document.getElementById("calculator-form");
    if (form) form.reset();
    
    const currentSystem = document.getElementById("current-system-input").value;
    handleSystemChange(currentSystem);

    const container = document.getElementById("results-container");
    const listElement = document.getElementById("materials-list");
    const summaryElement = document.getElementById("results-summary");
    
    if (container) container.classList.add("empty");
    if (listElement) listElement.innerHTML = "";
    if (summaryElement) summaryElement.innerHTML = "";
    
    currentResults = null;
    showToast("Formulario limpiado.", "info");
}

// Render Results on Page
function renderResults(results) {
    const container = document.getElementById("results-container");
    const listElement = document.getElementById("materials-list");
    const summaryElement = document.getElementById("results-summary");
    
    if (!container || !listElement || !summaryElement) return;

    container.classList.remove("empty");
    listElement.innerHTML = "";

    const titleText = results.projectName;
    let summaryHtml = `<h4>${titleText}</h4><p>Superficie: <strong>${results.area.toFixed(2)} m²</strong> | Perímetro/Alto: <strong>${results.perimeter.toFixed(2)} m</strong></p>`;
    
    if (results.system === 'pvc' && results.pvcOptim) {
        const opt = results.pvcOptim;
        const wastePct = ((opt.waste / (opt.directionSpan * opt.directionCross)) * 100).toFixed(1);
        summaryHtml += `<p class="results-optimization-note">
            Sentido sugerido: <strong>${opt.nameDirection}</strong> &bull; Merma PVC: <strong>${wastePct}%</strong> (${opt.waste.toFixed(2)} m²)
        </p>`;
    } else if (results.system === 'pintura') {
        summaryHtml += `<p class="results-optimization-note">
            Manos estimadas: <strong>${results.paintHands}</strong>
        </p>`;
    }
    
    summaryElement.innerHTML = summaryHtml;

    results.materials.forEach(mat => {
        const row = document.createElement("div");
        row.className = "material-row";
        
        row.innerHTML = `
            <div class="col-material">
                <span class="mat-name">${mat.name}</span>
                <span class="mat-info">${mat.category} &bull; ${mat.packDesc}</span>
            </div>
            <div class="col-exact">
                ${mat.exact.toFixed(2)} ${mat.unit}
            </div>
            <div class="col-suggested">
                <span class="suggested-badge">${mat.suggestedText}</span>
            </div>
        `;
        listElement.appendChild(row);
    });

    currentResults = results;
}

// ==========================================================================
// WHATSAPP REDIRECT BUILDER
// ==========================================================================
function sendWhatsAppQuote() {
    if (!currentResults) {
        showToast("Primero realiza un cálculo de materiales.", "warning");
        return;
    }

    const branchSelect = document.getElementById("calc-branch");
    if (!branchSelect) return;
    const selectedBranch = branchSelect.value;

    let phone = "5493856258128";
    let branchName = "Santiago del Estero (Av. Rivadavia)";

    if (selectedBranch === "banda") {
        phone = "5493854977332";
        branchName = "Sucursal La Banda (Calle Bolivia)";
    }

    let text = `Hola Pinturerías MultiColor, he realizado un cálculo en el cotizador de la web para la sucursal de *${branchName}* y necesito cotización de lo siguiente:\n\n`;
    
    text += `*Rubro:* ${currentResults.projectName}\n`;
    text += `*Dimensiones:* ${currentResults.area.toFixed(2)} m² / ${currentResults.perimeter.toFixed(2)} m\n`;
    
    if (currentResults.system === 'pintura') {
        text += `*Manos:* ${currentResults.paintHands}\n`;
    }
    
    text += `\n*Materiales sugeridos:*\n`;
    
    currentResults.materials.forEach(mat => {
        text += `• ${mat.suggestedText} - ${mat.name}\n`;
    });

    text += `\nQuedo a la espera de su respuesta. ¡Muchas gracias!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    showToast("Abriendo WhatsApp para cotizar...");
}

// ==========================================================================
// FORM DYNAMIC POPULATION
// ==========================================================================
function populateProjectTypeDropdown(system) {
    const select = document.getElementById("project-type");
    if (!select) return;

    select.innerHTML = "";
    const options = COEFFICIENTS[system];

    for (const key in options) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = options[key].name;
        select.appendChild(option);
    }
}

function handleSystemChange(system) {
    document.getElementById("current-system-input").value = system;

    // Toggle Inputs containers
    document.getElementById("durlock-inputs").classList.add("hidden");
    document.getElementById("pvc-inputs").classList.add("hidden");
    document.getElementById("pintura-inputs").classList.add("hidden");
    
    const projectTypeContainer = document.getElementById("project-type-container");

    if (system === 'durlock') {
        document.getElementById("durlock-inputs").classList.remove("hidden");
        if (projectTypeContainer) projectTypeContainer.classList.remove("hidden");
        populateProjectTypeDropdown('durlock');
    } else if (system === 'pvc') {
        document.getElementById("pvc-inputs").classList.remove("hidden");
        if (projectTypeContainer) projectTypeContainer.classList.remove("hidden");
        populateProjectTypeDropdown('pvc');
    } else if (system === 'pintura') {
        document.getElementById("pintura-inputs").classList.remove("hidden");
        if (projectTypeContainer) projectTypeContainer.classList.add("hidden");
        populateProjectTypeDropdown('pintura');
    }
}

// ==========================================================================
// DOM READY & EVENT BINDINGS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Tab switcher (Horizontal tabs)
    const tabButtons = document.querySelectorAll(".calc-tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const system = btn.getAttribute("data-system");
            handleSystemChange(system);
            
            // Auto clean results when switching systems to prevent confusion
            const container = document.getElementById("results-container");
            if (container) container.classList.add("empty");
            currentResults = null;
        });
    });

    // Populate Durlock dropdown by default
    handleSystemChange('durlock');

    // 3. Calculator Main Action buttons
    const calcBtn = document.getElementById("calculate-btn");
    if (calcBtn) calcBtn.addEventListener("click", performCalculation);

    const resetCalcBtn = document.getElementById("reset-calc-btn");
    if (resetCalcBtn) resetCalcBtn.addEventListener("click", resetCalculation);

    // 4. WhatsApp compiler action
    const whatsappBtn = document.getElementById("whatsapp-send-btn");
    if (whatsappBtn) whatsappBtn.addEventListener("click", sendWhatsAppQuote);

    // 5. Navigation dynamic active state during scrolling
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    const sections = document.querySelectorAll("main > section");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});

// ==========================================================================
// HIDE ELFSIGHT WATERMARK (SHADOW DOM PIERCING)
// ==========================================================================
function hideElfsightWatermark() {
    // 1. Regular DOM
    document.querySelectorAll('a[href*="elfsight.com"], [class*="AppCopyContainer"], [class*="WidgetCopyContainer"], [class*="WidgetCopy"]').forEach(el => {
        el.style.setProperty('display', 'none', 'important');
    });

    // 2. Shadow DOM Piercing
    const allElements = document.querySelectorAll('*');
    for (let i = 0; i < allElements.length; i++) {
        const el = allElements[i];
        if (el.shadowRoot) {
            // Check if we need to inject CSS into this shadow root
            if (!el.shadowRoot.querySelector('.elfsight-hide-style')) {
                const style = document.createElement('style');
                style.className = 'elfsight-hide-style';
                style.textContent = `
                    a[href*="elfsight.com"],
                    [class*="AppCopyContainer"],
                    [class*="WidgetCopyContainer"],
                    [class*="WidgetCopy"] {
                        display: none !important;
                        opacity: 0 !important;
                        visibility: hidden !important;
                        height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        pointer-events: none !important;
                    }
                `;
                el.shadowRoot.appendChild(style);
            }

            // Also directly find and hide any elements containing the watermark
            el.shadowRoot.querySelectorAll('a[href*="elfsight.com"]').forEach(link => {
                link.style.setProperty('display', 'none', 'important');
                
                let parent = link.parentElement;
                if (parent && parent !== el.shadowRoot) {
                    parent.style.setProperty('display', 'none', 'important');
                    
                    let grandParent = parent.parentElement;
                    if (grandParent && grandParent !== el.shadowRoot) {
                        grandParent.style.setProperty('display', 'none', 'important');
                    }
                }
            });
        }
    }
}

// Run repeatedly to handle dynamic widget loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startWatermarkHider);
} else {
    startWatermarkHider();
}

function startWatermarkHider() {
    // Run frequently at the beginning, then back off to a periodic check
    let count = 0;
    const fastInterval = setInterval(() => {
        hideElfsightWatermark();
        count++;
        if (count > 50) {
            clearInterval(fastInterval);
            setInterval(hideElfsightWatermark, 1500);
        }
    }, 150);
}
