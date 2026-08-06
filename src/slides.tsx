import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Users, Calendar, Target, Settings, MessageSquare, ArrowDown, Check } from 'lucide-react';

const SlideContainer = ({ children, id }: { children: React.ReactNode, tag?: string, category?: string, id?: string }) => (
  <section id={id} className="w-full min-h-[100dvh] flex flex-col justify-center px-5 md:px-24 py-20 md:py-28 relative max-w-7xl mx-auto">
    <div className="w-full my-auto flex flex-col justify-center">
      <div className="w-full">
        {children}
      </div>
    </div>
  </section>
);

export const Slide1 = () => (
  <SlideContainer id="inicio" category="Início" tag="✨ Estratégia Prática de Vendas & MMN">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1 max-w-2xl min-h-[calc(100dvh-10rem)] md:min-h-0 flex flex-col justify-center py-6 md:py-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-[5.5rem] leading-[1.05] tracking-tight font-serif font-black mb-6 md:mb-8 text-foreground"
        >
          Atraia clientes, <br/>
          <span className="text-gradient italic font-black">capture dados</span> <br/>
          e escale sua rede.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-base md:text-2xl text-foreground/70 mb-8 md:mb-12 border-l-4 border-primary pl-4 md:pl-6 font-sans font-light"
        >
          Descubra como vender o <strong className="font-semibold text-foreground">Nutri AN-T</strong> e cadastrar novos membros na sua rede usando tráfego pago e WhatsApp.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-4 md:gap-6">
          <a href="#problema" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-sans font-semibold tracking-wide flex items-center gap-2 md:gap-3 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 text-sm md:text-base">
            Ver Apresentação <ArrowRight size={20} />
          </a>
          <span className="text-sm font-sans text-foreground/50 flex items-center gap-2 uppercase tracking-widest font-semibold">
            <ArrowDown size={16} className="animate-bounce" /> Role para baixo
          </span>
        </motion.div>
      </div>
      
      <motion.div 
        className="flex-1 w-full max-w-xl mx-auto md:max-w-xl lg:max-w-2xl flex justify-center relative pt-12 md:pt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          opacity: { duration: 0.5, delay: 0.3 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
      >
        <img 
          src="https://lh3.googleusercontent.com/d/1DCaj8yFz8A2zIE9gxOFQ1UHbj9J22g6n=w1000" 
          alt="Ilustração da Estratégia" 
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('lh3.googleusercontent.com')) {
              target.src = "https://drive.google.com/thumbnail?id=1DCaj8yFz8A2zIE9gxOFQ1UHbj9J22g6n&sz=w1000";
            } else if (target.src.includes('drive.google.com/thumbnail')) {
              target.src = "https://drive.google.com/uc?export=download&id=1DCaj8yFz8A2zIE9gxOFQ1UHbj9J22g6n";
            }
          }}
          className="w-full h-auto object-contain relative z-10 drop-shadow-2xl rounded-2xl max-h-[75vh]"
        />

        {/* Floating Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
          transition={{ 
            opacity: { delay: 0.8, duration: 0.5 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-4 left-2 md:bottom-6 md:-left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-2xl border border-white/80 z-20 flex flex-col gap-1 ring-1 ring-black/5"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] md:text-xs font-sans uppercase font-bold tracking-widest text-primary">
              Nutri AN-T
            </span>
          </div>
          <span className="font-serif font-bold text-foreground text-base md:text-lg tracking-tight whitespace-nowrap">
            Menos dor, mais vida.
          </span>
        </motion.div>
      </motion.div>
    </div>
  </SlideContainer>
);

export const Slide2 = () => (
  <SlideContainer id="problema" category="O Desafio" tag="O Problema">
    <h2 className="text-3xl md:text-6xl font-serif font-black mb-4 md:mb-6 tracking-tight">
      Por que depender só de <span className="italic text-primary font-black">indicação</span> não funciona?
    </h2>
    <p className="text-base md:text-xl text-foreground/70 mb-8 md:mb-12 max-w-3xl font-light">
      A lista de contatos acaba rápido e o negócio trava se depender só de esforço orgânico.
    </p>
    
    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
      <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl border-t-4 border-t-red-500 relative">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-4 md:mb-6">
          <XCircle size={20} className="md:w-6 md:h-6" />
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 font-sans text-red-600">Sem Tráfego Pago</h3>
        <p className="text-foreground/70 leading-relaxed font-sans text-sm md:text-base">
          Você fica preso falando com as mesmas pessoas de sempre. Sem novos leads chegando todo dia, as vendas e os cadastros estagnam.
        </p>
      </div>
      <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl border-t-4 border-t-green-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 md:mb-6 relative z-10">
          <CheckCircle2 size={20} className="md:w-6 md:h-6" />
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 font-sans text-green-700 relative z-10">Com Estratégia Digital</h3>
        <p className="text-foreground/70 leading-relaxed relative z-10 font-sans text-sm md:text-base">
          Anúncios no Meta e Google trazem pessoas interessadas todos os dias para o seu WhatsApp. Você só precisa atender e fechar.
        </p>
      </div>
    </div>
  </SlideContainer>
);

export const Slide3 = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');
  
  return (
    <SlideContainer category="A Estratégia" tag="A Estratégia">
      <h2 className="text-3xl md:text-6xl font-serif font-black mb-4 md:mb-6 tracking-tight">
        O Funil Híbrido: <br className="md:hidden"/> <span className="italic text-accent font-black">Venda</span> ou <span className="italic text-primary font-black">Cadastro</span>
      </h2>
      <p className="text-base md:text-xl text-foreground/70 mb-8 md:mb-12 max-w-3xl font-light">
        Escolha como abordar o cliente para garantir a venda e capturar os dados dele. Clique para alternar.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex flex-row md:flex-col gap-2 md:gap-4 md:w-1/3">
          <motion.button 
            onClick={() => setActiveTab('A')}
            animate={{ scale: activeTab === 'A' ? [1.02, 1.05, 1.02] : [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className={`flex-1 p-3 md:p-6 rounded-xl md:rounded-2xl text-left transition-colors ${activeTab === 'A' ? 'bg-primary text-white shadow-xl shadow-primary/20 z-10' : 'glass-card hover:bg-white/80 shadow-md'}`}
          >
            <h4 className="font-bold text-sm md:text-lg mb-1 font-sans">Opção A</h4>
            <p className={`text-[11px] md:text-sm font-sans ${activeTab === 'A' ? 'text-white/80' : 'text-foreground/60'}`}>Vende o Produto Primeiro</p>
          </motion.button>
          <motion.button 
            onClick={() => setActiveTab('B')}
            animate={{ scale: activeTab === 'B' ? [1.02, 1.05, 1.02] : [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
            className={`flex-1 p-3 md:p-6 rounded-xl md:rounded-2xl text-left transition-colors ${activeTab === 'B' ? 'bg-accent text-white shadow-xl shadow-accent/20 z-10' : 'glass-card hover:bg-white/80 shadow-md'}`}
          >
            <h4 className="font-bold text-sm md:text-lg mb-1 font-sans">Opção B</h4>
            <p className={`text-[11px] md:text-sm font-sans ${activeTab === 'B' ? 'text-white/80' : 'text-foreground/60'}`}>Cadastro com Desconto</p>
          </motion.button>
        </div>
        
        <div className="md:w-2/3 glass-panel p-6 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden min-h-[350px] md:min-h-[320px] flex flex-col">
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20 transition-colors duration-500 ${activeTab === 'A' ? 'bg-primary/20' : 'bg-accent/20'}`}></div>
          
          <AnimatePresence mode="wait">
            {activeTab === 'A' ? (
              <motion.div 
                key="A" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="relative z-10 flex-grow flex flex-col justify-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary mb-4 md:mb-6">
                  <Target size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 font-serif">Venda Direta & Recrutamento</h3>
                <p className="text-sm md:text-lg text-foreground/80 mb-4 md:mb-6 font-light leading-relaxed">
                  O cliente compra o produto pela dor. Depois da compra, oferecemos o cadastro na rede.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-1 h-10 md:h-12 bg-primary rounded-full mt-1"></div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-bold mb-1 font-sans">Ação</p>
                      <p className="font-medium text-foreground/80 font-sans text-xs md:text-base">Checkout rápido na landing page.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-1 h-10 md:h-12 bg-green-500 rounded-full mt-1"></div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-green-600 font-bold mb-1 font-sans">Resultado</p>
                      <p className="font-medium text-foreground/80 font-sans text-xs md:text-base">Lucro na venda + novo membro na rede.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="B" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="relative z-10 flex-grow flex flex-col justify-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 text-accent mb-4 md:mb-6">
                  <Users size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 font-serif">Captação & Desconto Imediato</h3>
                <p className="text-sm md:text-lg text-foreground/80 mb-4 md:mb-6 font-light leading-relaxed">
                  O lead ganha desconto imediato ao preencher os dados, entrando direto na sua base e no MMN.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-1 h-10 md:h-12 bg-accent rounded-full mt-1"></div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent font-bold mb-1 font-sans">Ação</p>
                      <p className="font-medium text-foreground/80 font-sans text-xs md:text-base">Formulário simples de cadastro.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-1 h-10 md:h-12 bg-green-500 rounded-full mt-1"></div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-green-600 font-bold mb-1 font-sans">Resultado</p>
                      <p className="font-medium text-foreground/80 font-sans text-xs md:text-base">Dados capturados + lead qualificado para abordagem.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideContainer>
  );
};

export const Slide4 = () => {
  const steps = [
    { num: "01", title: "Anúncio Pago", desc: "Anúncios no Instagram e Google atraindo quem tem interesse real.", icon: <TrendingUp size={24} /> },
    { num: "02", title: "Landing Page", desc: "Página profissional que apresenta o produto e captura o contato.", icon: <Target size={24} /> },
    { num: "03", title: "WhatsApp", desc: "Contato direto para tirar dúvidas, fechar a venda ou fazer o cadastro.", icon: <MessageSquare size={24} /> },
    { num: "04", title: "CRM e Rede", desc: "Organização dos leads para remarketing e crescimento da equipe.", icon: <Users size={24} /> }
  ];

  const widths = ['w-full', 'w-[94%] md:w-[88%]', 'w-[88%] md:w-[76%]', 'w-[82%] md:w-[64%]'];

  return (
    <SlideContainer category="O Fluxo" tag="O Fluxo">
      <h2 className="text-3xl md:text-6xl font-serif font-black mb-4 md:mb-6 tracking-tight text-center md:text-left">
        Como o cliente <span className="italic text-primary font-black">chega até você</span>
      </h2>
      <p className="text-base md:text-xl text-foreground/70 mb-4 md:mb-8 max-w-3xl font-light text-center md:text-left">
        Um passo a passo estruturado como um funil, do anúncio até o fechamento.
      </p>
      
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto mt-4 md:mt-6 relative">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 1 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: [1, 1.03, 1],
                borderColor: ["rgba(0, 71, 171, 0.2)", "rgba(0, 71, 171, 0.6)", "rgba(0, 71, 171, 0.2)"]
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                opacity: { delay: i * 0.15, duration: 0.4 },
                y: { delay: i * 0.15, duration: 0.4 },
                scale: { duration: 1.5, repeat: Infinity, repeatDelay: 4, delay: 1 + i * 0.3, ease: "easeInOut" },
                borderColor: { duration: 1.5, repeat: Infinity, repeatDelay: 4, delay: 1 + i * 0.3, ease: "easeInOut" }
              }}
              className={`${widths[i]} glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl border border-primary/20 shadow-lg relative flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6 z-10 bg-white/40 hover:bg-white/60 transition-colors duration-300`}
            >
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary to-accent rounded-l-2xl md:rounded-l-3xl opacity-50"></div>
              
              <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl bg-white/80 border border-primary/10 flex items-center justify-center text-primary shadow-sm">
                {step.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-1 md:mb-2 justify-center md:justify-start">
                  <span className="text-[10px] md:text-xs uppercase tracking-widest font-black text-primary/60 font-sans bg-primary/5 px-2 py-1 rounded-full w-fit mx-auto md:mx-0">Etapa {step.num}</span>
                  <h3 className="text-lg md:text-xl font-bold font-serif">{step.title}</h3>
                </div>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed font-sans">{step.desc}</p>
              </div>
            </motion.div>
            
            {i < steps.length - 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1 }}
                className="my-1 md:my-2 text-primary/40 flex flex-col items-center justify-center"
              >
                <ArrowDown size={24} className="animate-bounce" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </SlideContainer>
  );
};

export const Slide5 = () => (
  <SlideContainer category="Setup" tag="Investimento Inicial">
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl md:text-6xl font-serif font-black mb-4 md:mb-6 tracking-tight">
          Setup de <br className="hidden md:block"/> <span className="italic text-accent font-black">Implantação</span>
        </h2>
        <p className="text-base md:text-xl text-foreground/70 mb-6 md:mb-8 font-light">
          Tudo o que criamos para deixar sua estrutura pronta para vender em até 20 dias.
        </p>
        <div className="glass-panel p-6 md:p-10 rounded-2xl md:rounded-3xl border-l-4 border-l-accent relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <p className="text-xs md:text-sm uppercase tracking-widest text-foreground/50 font-bold font-sans">Pagamento Único</p>
            <span className="inline-flex items-center justify-center bg-accent text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              Para os 10 primeiros
            </span>
          </div>
          <div className="mb-1 md:mb-2">
            <span className="text-4xl md:text-5xl font-black text-accent font-serif">R$ 1.297</span>
          </div>
          <p className="text-xs md:text-sm text-foreground/50 line-through mb-4 md:mb-6 font-sans">Valor normal: R$ 1.837</p>
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-primary bg-primary/10 w-fit px-3 md:px-4 py-1.5 md:py-2 rounded-full font-sans">
            <Calendar size={14} className="md:w-4 md:h-4" /> Prazo: até 20 dias
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 w-full">
        <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-foreground/40 mb-4 md:mb-6 font-sans">O que está incluso</h3>
        <ul className="space-y-2 md:space-y-4">
          {[
            "Landing Page Profissional (Pronta para converter)",
            "Design Personalizado (Criativos que performam)",
            "Botão WhatsApp Estratégico (Atendimento ágil)",
            "Integração Redes & Google (Pixels configurados)",
            "Google Meu Negócio (Presença local)",
            "Copy dos Textos (Focada em conversão)"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 md:gap-4 glass-card p-3 md:p-4 rounded-xl border border-white/40 shadow-sm">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <Check size={14} strokeWidth={3} className="md:w-4 md:h-4" />
              </div>
              <span className="font-medium text-xs md:text-base font-sans text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SlideContainer>
);

export const Slide6 = () => (
  <SlideContainer category="Mensalidade" tag="Operação Mensal">
    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
      <h2 className="text-3xl md:text-6xl font-serif font-black mb-4 md:mb-6 tracking-tight">
        Gestão de <span className="italic text-primary font-black">Tráfego Pago</span>
      </h2>
      <p className="text-base md:text-xl text-foreground/70 font-light">
        Cuidamos dos anúncios todos os meses para trazer novos clientes para você.
      </p>
    </div>
    
    <div className="glass-panel p-6 md:p-14 rounded-3xl md:rounded-[3rem] max-w-4xl mx-auto relative overflow-hidden border border-primary/20 shadow-xl md:shadow-2xl shadow-primary/10">
      <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20"></div>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-primary mb-2 md:mb-4 font-sans">Investimento Mensal</p>
          <div className="text-5xl md:text-7xl font-black font-serif mb-1 md:mb-2">R$ 857</div>
          <p className="text-foreground/50 font-medium mb-4 md:mb-6 font-sans text-sm md:text-base">/ mês</p>
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed max-w-sm mx-auto md:mx-0 font-sans">
            Inclui otimização de campanhas, testes de criativos e acompanhamento contínuo dos resultados.
          </p>
        </div>
        
        <div className="w-full h-px md:w-px md:h-32 bg-primary/20 block"></div>
        
        <div className="md:w-1/2 space-y-4 md:space-y-6 w-full">
          <div className="bg-white/80 p-4 md:p-5 rounded-2xl flex gap-3 md:gap-4 items-start border border-white">
            <div className="mt-1 text-accent"><Settings size={18} className="md:w-5 md:h-5" /></div>
            <div>
              <p className="font-bold text-sm mb-1 font-sans">Testes Iniciais</p>
              <p className="text-[10px] md:text-xs text-foreground/70 font-sans">Primeiros R$ 300 focados em testes de público e criativos.</p>
            </div>
          </div>
          <div className="bg-red-50/80 p-4 md:p-5 rounded-2xl flex gap-3 md:gap-4 items-start border border-red-100">
            <div className="mt-1 text-red-500 font-bold text-sm md:text-base">⚠️</div>
            <div>
              <p className="font-bold text-sm mb-1 text-red-700 font-sans">Atenção</p>
              <p className="text-[10px] md:text-xs text-red-600/80 font-sans">Custos de ferramentas e anúncios nas plataformas (Meta/Google) são pagos diretamente pelo cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

export const Slide7 = () => {
  const pyramidWidths = ['w-[85%] md:w-[60%]', 'w-[92%] md:w-[80%]', 'w-full'];

  return (
    <SlideContainer category="Crescimento" tag="Crescimento">
      <h2 className="text-3xl md:text-6xl font-serif font-black mb-4 md:mb-6 tracking-tight text-center md:text-left">
        Como funciona a <span className="italic text-accent font-black">Escala</span>
      </h2>
      <p className="text-base md:text-xl text-foreground/70 mb-8 md:mb-12 max-w-3xl font-light text-center md:text-left">
        Mais investimento em anúncios = mais vendas e mais cadastros na sua rede.
      </p>
      
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`${pyramidWidths[0]} glass-card border border-foreground/10 shadow-lg rounded-2xl md:rounded-3xl overflow-hidden`}
        >
          <div className="p-4 md:p-8 bg-white/40 hover:bg-white/60 transition-colors flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-16 md:h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Settings size={24} className="md:w-8 md:h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-primary/70 mb-1 md:mb-2 font-sans">Fase 1: Validação</h3>
              <p className="text-xl md:text-2xl font-black mb-1 md:mb-2 font-serif">Até R$ 1k</p>
              <p className="text-xs md:text-sm text-foreground/70 font-sans">Inclui testes iniciais de público e validação de criativos.</p>
            </div>
            <div className="shrink-0">
              <div className="inline-block px-4 py-2 rounded-lg bg-primary text-white text-xs md:text-sm font-bold font-sans shadow-md whitespace-nowrap">
                Taxa: R$ 857 / mês
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`${pyramidWidths[1]} glass-card border border-foreground/10 shadow-xl rounded-2xl md:rounded-3xl overflow-hidden`}
        >
          <div className="p-4 md:p-8 bg-white/60 hover:bg-white/80 transition-colors flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-16 md:h-16 shrink-0 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <TrendingUp size={24} className="md:w-8 md:h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-accent/70 mb-1 md:mb-2 font-sans">Fase 2: Aceleração</h3>
              <p className="text-xl md:text-2xl font-black mb-1 md:mb-2 font-serif">R$ 1k a R$ 3k</p>
              <p className="text-xs md:text-sm text-foreground/70 font-sans">Aceleração de leads e aumento no volume de vendas.</p>
            </div>
            <div className="shrink-0">
              <div className="inline-block px-4 py-2 rounded-lg bg-accent text-white text-xs md:text-sm font-bold font-sans shadow-md whitespace-nowrap">
                Ajuste Proporcional
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`${pyramidWidths[2]} rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl`}
        >
          <div className="p-4 md:p-8 bg-primary text-white hover:bg-primary/95 transition-colors flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6 border border-primary/20">
            <div className="w-10 h-10 md:w-16 md:h-16 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
              <Target size={24} className="md:w-8 md:h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/70 mb-1 md:mb-2 font-sans">Fase 3: Expansão</h3>
              <p className="text-xl md:text-2xl font-black mb-1 md:mb-2 font-serif">Acima R$ 3k</p>
              <p className="text-xs md:text-sm text-white/80 font-sans">Escala agressiva focada em dominar a região/nicho.</p>
            </div>
            <div className="shrink-0">
              <div className="inline-block px-4 py-2 rounded-lg bg-white text-primary text-xs md:text-sm font-bold font-sans shadow-md whitespace-nowrap">
                Sob Consulta
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export const Slide8 = () => {
  const phases = [
    { num: 1, days: "Dias 1-4", title: "Alinhamento", desc: "Definição do público, oferta e identidade visual." },
    { num: 2, days: "Dias 5-10", title: "Criação", desc: "Desenvolvimento da landing page e textos persuasivos." },
    { num: 3, days: "Dias 11-15", title: "Integrações", desc: "Configuração do WhatsApp, Google e pixels de rastreio." },
    { num: 4, days: "Dias 16-20", title: "Lançamento", desc: "Testes iniciais e anúncios colocados no ar." }
  ];

  return (
    <SlideContainer category="Prazos" tag="Prazos">
      <h2 className="text-3xl md:text-6xl font-serif font-black mb-4 md:mb-6 tracking-tight">
        Cronograma de <span className="italic text-primary font-black">Até 20 Dias</span>
      </h2>
      <p className="text-base md:text-xl text-foreground/70 mb-8 md:mb-16 max-w-3xl font-light">
        O passo a passo rápido para colocar sua estratégia no ar.
      </p>
      
      <div className="space-y-3 md:space-y-4 max-w-4xl">
        {phases.map((phase, i) => (
          <div key={i} className="glass-card p-4 md:p-6 rounded-2xl flex flex-row items-center gap-3 md:gap-6 group hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl md:text-2xl font-serif shadow-inner">
              {phase.num}
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <div className="w-auto md:w-32 shrink-0">
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-1 md:px-3 md:py-1.5 rounded-full font-sans border border-primary/10">
                  {phase.days}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-bold md:mb-1 font-serif leading-tight">{phase.title}</h3>
                <p className="text-foreground/60 font-sans text-xs md:text-sm">{phase.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
};

export const Slide9 = () => {
  const whatsappUrl = "https://wa.me/5554996362178?text=Olá!%20Acabei%20de%20ver%20a%20apresentação%20e%20estou%20pronto(a)%20para%20iniciar%20o%20projeto!";
  
  return (
    <SlideContainer category="Próximo Passo" tag="Fechamento">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mt-0 md:mt-4">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-4 md:mb-8 flex items-center justify-center shadow-2xl shadow-primary/30 animate-bounce">
          <CheckCircle2 size={32} className="text-white md:w-8 md:h-8 w-6 h-6" />
        </div>
        
        <h2 className="text-4xl md:text-7xl font-serif font-black mb-4 md:mb-6 tracking-tight">
          Pronto para <br className="md:hidden"/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black">Começar?</span>
        </h2>
        <p className="text-base md:text-xl text-foreground/70 mb-6 md:mb-12 font-light">
          Resumo dos valores e próximo passo para iniciar o projeto.
        </p>
        
        <div className="glass-panel p-6 md:p-12 rounded-2xl md:rounded-[2rem] w-full mb-8 md:mb-12 border border-foreground/10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left relative">
            <div className="px-2 md:px-4">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-foreground/50 mb-1 md:mb-2 font-sans">Investimento Único</p>
              <p className="text-3xl md:text-4xl font-black text-foreground mb-1 md:mb-2 font-serif">R$ 1.297</p>
              <p className="text-xs md:text-sm text-foreground/60 font-sans font-medium">Setup Completo (até 20 dias)</p>
            </div>
            <div className="hidden md:block w-px h-full bg-foreground/10 absolute left-1/2 top-0 bottom-0"></div>
            <div className="px-2 md:px-4 pt-4 md:pt-0 border-t border-foreground/10 md:border-none">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-foreground/50 mb-1 md:mb-2 font-sans">Mensalidade (Gestão)</p>
              <p className="text-3xl md:text-4xl font-black text-foreground mb-1 md:mb-2 font-serif">R$ 857</p>
              <p className="text-xs md:text-sm text-foreground/60 font-sans font-medium">Iniciando com R$ 300 em testes</p>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-foreground/10 text-center">
            <p className="text-[10px] md:text-xs text-foreground/40 font-medium font-sans">*Ferramentas pagas por conta do cliente.</p>
          </div>
        </div>
        
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-glow-sweep bg-primary hover:bg-primary/90 text-white px-6 py-4 md:px-10 md:py-5 rounded-full font-sans font-bold tracking-wide flex items-center justify-center gap-3 md:gap-4 transition-all hover:scale-105 active:scale-95 text-base md:text-lg w-full md:w-auto"
        >
          Aprovar e Iniciar no WhatsApp <ArrowRight size={20} className="md:w-6 md:h-6" />
        </a>
      </div>
    </SlideContainer>
  );
};
