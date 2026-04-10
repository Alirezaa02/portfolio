import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import API from '../lib/api'
import '../styles/admin.css'

function useApi(token) {
  async function request(method, path, body) {
    const res = await fetch(`${API}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.detail || 'Request failed')
    }
    if (res.status === 204) return null
    return res.json()
  }
  return { request }
}

// ── Project Form ──────────────────────────────────────
function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(
    initial || { slug: '', title: '', description: '', overview: '', role: '', year: '', tech: '', highlights: '', learnings: '', github: '', category: '' }
  )
  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  return (
    <div className="admin-form">
      {[
        { key: 'slug', label: 'Slug', ph: 'my-project' },
        { key: 'title', label: 'Title', ph: 'Project Title' },
        { key: 'role', label: 'Your Role', ph: 'Full-Stack Developer' },
        { key: 'year', label: 'Year', ph: '2025' },
        { key: 'category', label: 'Category', ph: 'Full-Stack · AI · Cloud' },
        { key: 'tech', label: 'Tech (comma-separated)', ph: 'React, FastAPI, Docker' },
        { key: 'github', label: 'GitHub URL', ph: 'https://github.com/...' },
      ].map(({ key, label, ph }) => (
        <div className="admin-form__field" key={key}>
          <label className="admin-form__label">{label}</label>
          <input className="admin-form__input" placeholder={ph} value={form[key]} onChange={e => set(key, e.target.value)} />
        </div>
      ))}
      {[
        { key: 'description', label: 'Description', rows: 2 },
        { key: 'overview', label: 'Overview', rows: 3 },
        { key: 'highlights', label: 'Highlights (one per line)', rows: 5 },
        { key: 'learnings', label: 'Learnings (one per line)', rows: 4 },
      ].map(({ key, label, rows }) => (
        <div className="admin-form__field" key={key}>
          <label className="admin-form__label">{label}</label>
          <textarea className="admin-form__textarea" rows={rows} value={form[key]} onChange={e => set(key, e.target.value)} />
        </div>
      ))}
      <div className="admin-form__actions">
        <button className="btn btn-primary" onClick={() => onSave(form)}>Save</button>
        <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

// ── Experience Form ───────────────────────────────────
function ExperienceForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(
    initial || { role: '', company: '', location: '', period: '', summary: '', bullets: '', tech: '', order: 0 }
  )
  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  return (
    <div className="admin-form">
      {[
        { key: 'role', label: 'Role', ph: 'Software Developer' },
        { key: 'company', label: 'Company', ph: 'Atlas Blind & Curtain' },
        { key: 'location', label: 'Location', ph: 'Brisbane, QLD' },
        { key: 'period', label: 'Period', ph: '2023 – Present' },
        { key: 'tech', label: 'Tech (comma-separated)', ph: 'C#, Python, SQL' },
        { key: 'order', label: 'Order (display order)', ph: '0' },
      ].map(({ key, label, ph }) => (
        <div className="admin-form__field" key={key}>
          <label className="admin-form__label">{label}</label>
          <input className="admin-form__input" placeholder={ph} value={form[key]} onChange={e => set(key, e.target.value)} />
        </div>
      ))}
      {['summary', 'bullets'].map(key => (
        <div className="admin-form__field" key={key}>
          <label className="admin-form__label">{key === 'bullets' ? 'Bullet points (one per line)' : 'Summary'}</label>
          <textarea className="admin-form__textarea" rows={key === 'bullets' ? 6 : 3} value={form[key]} onChange={e => set(key, e.target.value)} />
        </div>
      ))}
      <div className="admin-form__actions">
        <button className="btn btn-primary" onClick={() => onSave(form)}>Save</button>
        <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

// ── Skill Form ────────────────────────────────────────
function SkillForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(
    initial || { name: '', level: 0, category: 'language', order: 0 }
  )
  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  return (
    <div className="admin-form">
      <div className="admin-form__field">
        <label className="admin-form__label">Name</label>
        <input className="admin-form__input" placeholder="JavaScript" value={form.name} onChange={e => set('name', e.target.value)} />
      </div>
      <div className="admin-form__field">
        <label className="admin-form__label">Category</label>
        <select className="admin-form__input" value={form.category} onChange={e => set('category', e.target.value)}>
          <option value="language">Language (with % bar)</option>
          <option value="tool">Tool / Platform</option>
          <option value="practice">Practice</option>
        </select>
      </div>
      {form.category === 'language' && (
        <div className="admin-form__field">
          <label className="admin-form__label">Proficiency % (0–100)</label>
          <input className="admin-form__input" type="number" min={0} max={100} value={form.level} onChange={e => set('level', parseInt(e.target.value))} />
        </div>
      )}
      <div className="admin-form__field">
        <label className="admin-form__label">Order</label>
        <input className="admin-form__input" type="number" value={form.order} onChange={e => set('order', parseInt(e.target.value))} />
      </div>
      <div className="admin-form__actions">
        <button className="btn btn-primary" onClick={() => onSave(form)}>Save</button>
        <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

// ── Main Admin Page ───────────────────────────────────
function Admin() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const { request } = useApi(token)
  const [tab, setTab] = useState('projects')
  const [projects, setProjects] = useState([])
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  const [users, setUsers] = useState([])
  const [editing, setEditing] = useState(null)
  const [adding, setAdding] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => { loadAll() }, [])

  async function loadAll() {
    const headers = { Authorization: `Bearer ${token}` }
    const [p, e, s, u] = await Promise.all([
      fetch(`${API}/projects/`).then(r => r.json()),
      fetch(`${API}/experience/`).then(r => r.json()),
      fetch(`${API}/skills/`).then(r => r.json()),
      fetch(`${API}/users/`, { headers }).then(r => r.ok ? r.json() : []),
    ])
    setProjects(p)
    setExperience(e)
    setSkills(s)
    setUsers(u)
  }

  function flash(text) {
    setMsg(text)
    setTimeout(() => setMsg(''), 3000)
  }

  async function saveProject(form) {
    try {
      if (editing) {
        await request('PUT', `/projects/${editing.id}`, form)
        flash('Project updated')
      } else {
        await request('POST', '/projects/', form)
        flash('Project added')
      }
      setEditing(null)
      setAdding(false)
      loadAll()
    } catch (e) { flash(e.message) }
  }

  async function deleteProject(id) {
    if (!confirm('Delete this project?')) return
    await request('DELETE', `/projects/${id}`)
    flash('Deleted')
    loadAll()
  }

  async function saveExperience(form) {
    try {
      if (editing) {
        await request('PUT', `/experience/${editing.id}`, form)
        flash('Experience updated')
      } else {
        await request('POST', '/experience/', form)
        flash('Experience added')
      }
      setEditing(null)
      setAdding(false)
      loadAll()
    } catch (e) { flash(e.message) }
  }

  async function deleteExperience(id) {
    if (!confirm('Delete this entry?')) return
    await request('DELETE', `/experience/${id}`)
    flash('Deleted')
    loadAll()
  }

  async function saveSkill(form) {
    try {
      if (editing) {
        await request('PUT', `/skills/${editing.id}`, form)
        flash('Skill updated')
      } else {
        await request('POST', '/skills/', form)
        flash('Skill added')
      }
      setEditing(null)
      setAdding(false)
      loadAll()
    } catch (e) { flash(e.message) }
  }

  async function deleteSkill(id) {
    if (!confirm('Delete this skill?')) return
    await request('DELETE', `/skills/${id}`)
    flash('Deleted')
    loadAll()
  }

  async function deleteUser(id) {
    if (!confirm('Delete this user?')) return
    try {
      await request('DELETE', `/users/${id}`)
      flash('User deleted')
      loadAll()
    } catch (e) { flash(e.message) }
  }

  function handleLogout() {
    logout()
    navigate('/')
  }

  const tabs = ['projects', 'experience', 'skills', 'users']

  return (
    <main className="admin section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="admin__header">
            <div>
              <p className="admin__eyebrow">Admin Dashboard</p>
              <h1 className="section-title">Manage Portfolio</h1>
            </div>
            <button className="btn btn-secondary" onClick={handleLogout}>Log Out</button>
          </div>

          {msg && <div className="admin__flash">{msg}</div>}

          {/* Tabs */}
          <div className="admin__tabs">
            {tabs.map(t => (
              <button
                key={t}
                className={`admin__tab ${tab === t ? 'admin__tab--active' : ''}`}
                onClick={() => { setTab(t); setEditing(null); setAdding(false) }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects tab */}
          {tab === 'projects' && (
            <div className="admin__section">
              <div className="admin__section-header">
                <h2 className="admin__section-title">Projects</h2>
                <button className="btn btn-primary" onClick={() => { setAdding(true); setEditing(null) }}>+ Add Project</button>
              </div>
              {adding && <ProjectForm onSave={saveProject} onCancel={() => setAdding(false)} />}
              <div className="admin__list">
                {projects.map(p => (
                  <div key={p.id} className="admin__item">
                    {editing?.id === p.id ? (
                      <ProjectForm initial={editing} onSave={saveProject} onCancel={() => setEditing(null)} />
                    ) : (
                      <>
                        <div className="admin__item-info">
                          <p className="admin__item-title">{p.title}</p>
                          <p className="admin__item-meta">{p.year} · {p.role}</p>
                        </div>
                        <div className="admin__item-actions">
                          <button className="admin__btn-edit" onClick={() => { setEditing(p); setAdding(false) }}>Edit</button>
                          <button className="admin__btn-delete" onClick={() => deleteProject(p.id)}>Delete</button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {projects.length === 0 && <p className="admin__empty">No projects yet. Add one above.</p>}
              </div>
            </div>
          )}

          {/* Experience tab */}
          {tab === 'experience' && (
            <div className="admin__section">
              <div className="admin__section-header">
                <h2 className="admin__section-title">Experience</h2>
                <button className="btn btn-primary" onClick={() => { setAdding(true); setEditing(null) }}>+ Add Role</button>
              </div>
              {adding && <ExperienceForm onSave={saveExperience} onCancel={() => setAdding(false)} />}
              <div className="admin__list">
                {experience.map(e => (
                  <div key={e.id} className="admin__item">
                    {editing?.id === e.id ? (
                      <ExperienceForm initial={editing} onSave={saveExperience} onCancel={() => setEditing(null)} />
                    ) : (
                      <>
                        <div className="admin__item-info">
                          <p className="admin__item-title">{e.role}</p>
                          <p className="admin__item-meta">{e.company} · {e.period}</p>
                        </div>
                        <div className="admin__item-actions">
                          <button className="admin__btn-edit" onClick={() => { setEditing(e); setAdding(false) }}>Edit</button>
                          <button className="admin__btn-delete" onClick={() => deleteExperience(e.id)}>Delete</button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {experience.length === 0 && <p className="admin__empty">No experience yet. Add one above.</p>}
              </div>
            </div>
          )}

          {/* Users tab */}
          {tab === 'users' && (
            <div className="admin__section">
              <div className="admin__section-header">
                <h2 className="admin__section-title">Registered Users</h2>
                <span className="admin__item-meta">{users.length} total</span>
              </div>
              <div className="admin__list">
                {users.map(u => (
                  <div key={u.id} className="admin__item">
                    <div className="admin__item-info">
                      <p className="admin__item-title">{u.email}</p>
                      <p className="admin__item-meta">
                        {u.is_admin ? '👑 Admin' : '👤 Visitor'} · ID #{u.id}
                      </p>
                    </div>
                    <div className="admin__item-actions">
                      {!u.is_admin && (
                        <button className="admin__btn-delete" onClick={() => deleteUser(u.id)}>Delete</button>
                      )}
                    </div>
                  </div>
                ))}
                {users.length === 0 && <p className="admin__empty">No users yet.</p>}
              </div>
            </div>
          )}

          {/* Skills tab */}
          {tab === 'skills' && (
            <div className="admin__section">
              <div className="admin__section-header">
                <h2 className="admin__section-title">Skills</h2>
                <button className="btn btn-primary" onClick={() => { setAdding(true); setEditing(null) }}>+ Add Skill</button>
              </div>
              {adding && <SkillForm onSave={saveSkill} onCancel={() => setAdding(false)} />}
              <div className="admin__list">
                {skills.map(s => (
                  <div key={s.id} className="admin__item">
                    {editing?.id === s.id ? (
                      <SkillForm initial={editing} onSave={saveSkill} onCancel={() => setEditing(null)} />
                    ) : (
                      <>
                        <div className="admin__item-info">
                          <p className="admin__item-title">{s.name}</p>
                          <p className="admin__item-meta">{s.category}{s.level > 0 ? ` · ${s.level}%` : ''}</p>
                        </div>
                        <div className="admin__item-actions">
                          <button className="admin__btn-edit" onClick={() => { setEditing(s); setAdding(false) }}>Edit</button>
                          <button className="admin__btn-delete" onClick={() => deleteSkill(s.id)}>Delete</button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {skills.length === 0 && <p className="admin__empty">No skills yet. Add one above.</p>}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}

export default Admin
